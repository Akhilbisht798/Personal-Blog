import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/api/auth/signin");
  }
  const body = await req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        image: body.image,
        description: body.description,
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

export async function GET(req: NextRequest) {
  try {
    const post = await prisma.post.findMany({});
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

//TODO: Complete this Delete API. Later...
export async function DELETE(req: NextRequest) {
  try {
    const data = await req.json();
    console.log(data);
    // const post = await prisma.post.delete({
    //   where: {
    //     id: data.id,
    //   },
    // });
  } catch (error) {
    console.log(error);
  }
}
