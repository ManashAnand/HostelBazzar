import { NextResponse } from "next/server";

import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";

export async function GET(req) {
    try {
      await connectDBP();
      const allPost = await prisma.post.findMany();
      return NextResponse.json({allPost},{status:200})
    } catch (error) {
      console.log(error)
      return NextResponse.json({message:"Error in fetching posts"},{status:500})
    }
    finally{
      await prisma.$disconnect();
    }
  }