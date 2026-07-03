"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// Component Props -> Use Interface
interface UserCard {
  id: string;
  name: string;
  username: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Complex Combinations -> Use Type
type status = "idle" | "loading" | "success" | "error";

// Create a type for updating a user profile (don't need ID or createdAt)
type UpdateUserProfileInput = Omit<UserCard, "id" | "createdAt">;

interface Video {
  id: string;
  title: string;
  description?: string;
  publicId: string;
  originlaSize: string;
  compressedSize: string;
  duration: number;
  createdAt: Date;
}

interface Image {
  id: string;
  title: string;
  description?: string;
  imageSize: string;
  fileType: ImageTypes;
  createdAt: Date;
  updatedAt: Date;
}

interface Img extends Image {
  originalSize: string;
  compressedSize: string;
}

type ImageTypes = "png" | "jpg" | "avif" | "jpge" | "webp" | "gif";

// learning about hooks
export default function page() {
  // ---------------- useState ----------------
  //
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ---------------- useRef ----------------
  const inputRef = useRef<HTMLInputElement>(null);

  // ---------------- useEffect ----------------
  useEffect(() => {
    document.title = `Count: ${count}`;

    console.log("Component Mounted / Count Changed");

    return () => {
      console.log("Cleanup");
    };
  }, [count]);

  // ---------------- useMemo ----------------
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total + count;
  }, [count]);

  // ---------------- useCallback ----------------
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={styles.container}>
      <h1>⚛ React Hooks Demo</h1>

      {/* useState */}
      <section style={styles.card}>
        <h2>useState</h2>

        <p>Count: {count}</p>

        <button onClick={increment}>Increment</button>

        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      {/* useRef */}
      <section style={styles.card}>
        <h2>useRef</h2>

        <input
          ref={inputRef}
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={focusInput}>Focus Input</button>

        <p>{text}</p>
      </section>

      {/* useMemo */}
      <section style={styles.card}>
        <h2>useMemo</h2>

        <p>Expensive Result:</p>

        <strong>{expensiveCalculation}</strong>

        <p>
          Open the console and notice the calculation only runs when Count
          changes.
        </p>
      </section>

      {/* useCallback */}
      <section style={styles.card}>
        <h2>useCallback</h2>

        <p>
          The <code>increment</code> function is memoized using
          <code>useCallback</code>.
        </p>
      </section>

      {/* useEffect */}
      <section style={styles.card}>
        <h2>useEffect</h2>

        <p>
          Check the browser tab title and open the console. The effect runs
          whenever <strong>count</strong> changes.
        </p>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "sans-serif",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },
};
