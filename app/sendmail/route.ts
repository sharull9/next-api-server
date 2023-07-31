import { sendMail } from "@/services/send-mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  if (res.toMail) {
    sendMail(res.name, res.email, res.message, res.toMail);
  } else {
    sendMail(res.name, res.email, res.message);
  }
  return NextResponse.json({ res });
}
