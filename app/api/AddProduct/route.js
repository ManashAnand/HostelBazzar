import { NextResponse } from "next/server";
import fs from "fs";
import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";



export async function POST(req) {
  try {
    let {title,price,number,room,ownerEmail,owner,hostel} = await req.json();
    await connectDBP();

    price = parseInt(price);
    room = parseInt(room)

    try {
    const post = await prisma.post.create({data:{
      title,
      price,
      mobile:number,
      roomNo:room,
      ownerEmail,
      owner,
      hostel
    }})


      return NextResponse.json({ post }, { status: 201 });
    } catch (error) {
      console.log(error)
      return NextResponse.json(
        { message: "Error in posting product." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
