import { sendMail } from "@/services/send-mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  sendMail(res.name, res.email, res.message, res.toMail || undefined);
  return NextResponse.json(res);
}
