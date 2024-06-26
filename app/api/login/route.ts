import { NextRequest, NextResponse } from "next/server";
import { signIn } from "next-auth/react";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (result?.error) {
    return NextResponse.json({ error: "Login failed" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}
