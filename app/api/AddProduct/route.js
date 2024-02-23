import { NextResponse } from "next/server";
import fs from "fs";
import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_BUCKET_REGION,
});

async function uploadFileToS3(file, fileName) {
  const fileBuffer = file;
   fileName = fileName.trim();
  console.log(fileName);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    // key: `myfolder/${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  const fileData = await s3.send(command);

  const fileKey = params.Key;
  const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${fileKey}`;

  console.log(fileUrl);
  return fileUrl;
}



export async function POST(req) {
  try {
    // let {title,price,number,room,ownerEmail,owner,hostel} = await req.json();
    
    const formImage = await req.formData();
    console.log(formImage)
    const file = formImage.get("file");
    const title = formImage.get("title");
    let price = formImage.get("price");
    const number = formImage.get("number");
    let room = formImage.get("room");
    const ownerEmail = formImage.get("ownerEmail");
    const owner = formImage.get("owner");
    const hostel = formImage.get("hostel");
    

    console.log(file)
    console.log(ownerEmail)

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const TrimmedName0fFile = file.name.replace(/\s+/g, '');
    console.log(TrimmedName0fFile);

    
    const fileUrl = await uploadFileToS3(buffer, TrimmedName0fFile);
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
      hostel,
      Image: fileUrl
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
    return NextResponse.json( error , { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
