import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { hostel } = await req.json();
  try {
    connectDBP();
    const allPost = await prisma.post.findMany({
      where: {
        hostel: {
          equals: hostel,
        },
      },
    });
    console.log(allPost);
   
    return NextResponse.json({allPost},{status:200})
  } catch (error) {
    return NextResponse.json({
      error: "Not able to find items due to server issue",
    });
  }
}
