import { NextResponse } from "next/server";
import fs from "fs";
import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";
// import awsSdk from 'aws-sdk'

// const s3 = new awsSdk.S3({ 
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// function uploadFileToS3(fileParams) {
//     return new Promise((resolve, reject) => {
//             s3.upload(fileParams, (err, res) => {
//                 if(err) {
//                     console.log(err);
//                     reject(err)
//                 } 
//                 // console.log(res);
//                 resolve(res);
//             })
//     });
// }

// async function readFileToUpload(fileDetails) {
//   try {
//     const fileData = fs.readFileSync(fileDetails.path);
//     const linkS3 = await uploadFileToS3({
//       Bucket: "royalnews",
//       Key: fileDetails.filename,
//       ACL: "public-read",
//       ContentType: "image/jpeg",
//       Body: fileData,
//     });
//     try {
//       fs.unlinkSync(fileDetails.path);
//     } catch (err) {
//       throw err; //response
//     }
//     if (!linkS3) {
//       throw "Invalid Operation";
//     }
//     return linkS3.Location;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }



export async function POST(req) {
  try {
    // const imageUrl = req.body;
    // console.log(req.json())
    // console.log(req.body)
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
    //   if (!imageUrl) throw new Error("UPLOADING_ERROR");

    //   const links3 = await readFileToUpload(imageUrl);

    //   req.body.image = links3;


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