import { NextResponse } from "next/server";
import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";
import moment from "moment";

export async function DELETE(req) {
  try {
    await connectDBP();
    const twoDaysAgo = moment().subtract(1, "days").toDate();
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        createdAt: {
          lt: twoDaysAgo,
        },
      },
    });
    return NextResponse.json({ message: `${deletedPosts.count} posts deleted` }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error in deleting posts" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}