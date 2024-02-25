import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mail";

export async function POST(request) {
  const body = await request.json();
  await sendEmail(body);
  return NextResponse.json({ message: "Email sent successfully" });
}
