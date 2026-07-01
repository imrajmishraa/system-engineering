type UserRole = "admin" | "teacher" | "student";
type AccountStatus = "pending_delition" | "active" | "deleted" | "suspended";

interface Role  {
  role: UserRole;
}

const newStudent: Role = {
  role: "student"
}

const newTeacher: Role = {
  role: "teacher"
}

interface Account {
  status: AccountStatus
}

const newAccount: Account =  {
  status: "active"
}


interface User {
  id: string;
  name: string;
  dob?: string;
  role: UserRole;
  email: string;
  phone?: number;
  status?: Account;
  password: string;
  createdAt: string;
  updatedAt: string;
}

interface student extends User{
  rollNumber: number;
  class: string;
  section: string;
  isPurchesedCource: boolean;
}

interface admin extends User{
  isTwoStepVerified: boolean;
  isPhoneVerified: boolean;
  phoneVerificationCode: string; 
  phoneVerificationCodeExpiry: Date;
  isEmailVerified: boolean;
  emailVerificationCode: Date;
  emailVerificationExpiry: Date;
  accountStatus: Account;
}