import { NextResponse } from "next/server";
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
  return fileName;
}

export async function POST(req) {
  try {
    const formImage = await req.formData();
    const file = formImage.get("file");

    // checks to do file type and all
    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const TrimmedName0fFile = file.name.replace(/\s+/g, '');
    console.log(TrimmedName0fFile);

    const fileName = await uploadFileToS3(buffer, TrimmedName0fFile);

    return NextResponse.json({ success: true, fileName }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
