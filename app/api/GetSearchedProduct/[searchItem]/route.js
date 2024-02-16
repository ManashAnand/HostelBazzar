import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
  console.log(params)
  const {searchItem} = params;
  try {
    connectDBP();
    const allPost = await prisma.post.findMany({
      where: {
        title: {
          startsWith: searchItem,
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
