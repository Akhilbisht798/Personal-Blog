import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(process.env.NEXTAUTH_URL + "/api/auth/signin");
  }
  const body = await req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        image: body.image,
        email: session?.user?.email, //FIXME: userEmail error in prisma.
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Successfully posted your blog" },
    { status: 200 }
  );
}
