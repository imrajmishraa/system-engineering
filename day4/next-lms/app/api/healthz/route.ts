import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma"; // Ensure this matches your Prisma singleton path
import Error from "next/error";

export async function GET() {
  try {
    // 1. Test database connectivity by executing a lightweight native query
    await prisma.$queryRaw`SELECT 1`;

    // 2. Return a healthy response if successful
    return NextResponse.json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: "connected",
      },
      { status: 200 },
    );
  } catch (error: Error) {
    // 3. Return an unhealthy status if database or server fails
    console.error("Healthcheck failure details:", error);

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        database: "disconnected",
        error: error?.message || "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
