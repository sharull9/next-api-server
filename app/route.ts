import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  await prisma.message.create({
    data: {
      name: res.name,
      email: res.email,
      message: res.message,
    },
  });
  return NextResponse.json({ res });
}

export async function GET(request: Request) {
  const res = await prisma.message.findMany();
  return NextResponse.json({ res });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const elementId = searchParams.get("id");
  //@ts-ignore
  const res = await prisma.message.delete({
    where: {
      id: `${elementId}`,
    },
  });
  return NextResponse.json({ res });
}
