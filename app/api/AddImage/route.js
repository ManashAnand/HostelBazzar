import { NextResponse } from "next/server";
import awsSdk from 'aws-sdk'
import fs, { writeFile } from 'fs'
import path from 'path'
import multer  from 'multer';


const storage = multer.diskStorage({
  filename: function (req, file, cb) {
      const extension = "".concat(file.originalname).split(".").pop();
      const filename = Date.now().toString(36);
      cb(null, `${filename}.${extension}`);
  },
});


const upload = multer({ storage });

const s3 = new awsSdk.S3({ 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function uploadFileToS3(fileParams) {
    return new Promise((resolve, reject) => {
            s3.upload(fileParams, (err, res) => {
                if(err) {
                    console.log(err);
                    reject(err)
                } 
                // console.log(res);
                resolve(res);
            })
    });
}

async function readFileToUpload(path) {
  try {
    // console.log(fileDetails)

    const fileData = fs.readFileSync(fileDetails.path);
    const linkS3 = await uploadFileToS3({
      Bucket: "imagedumperforproject",
      Key: fileDetails.filename,
      ACL: "public-read",
      ContentType: "image/jpeg",
      Body: fileData,
    });
    try {
      fs.unlinkSync(path);
      console.log("working 1")
    } catch (err) {
      // throw err; //response
      console.log(err)
    }
    if (!linkS3) {
      throw "Invalid Operation";
    }
    return linkS3.Location;
  } catch (err) {
    console.log(err);
    throw err;
  }
}


export async function POST(req) {
    try {
      const formData = await req.formData();
      const file = formData.get('file')
      upload.single('file')
        // console.log(file)
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData)
        const path = `./public/${file.name}`
        await writeFile(path,buffer)
        const links3 = await readFileToUpload(fileDetails,path);
        req.body.image = links3;
        return NextResponse.json("working")
    } catch (error) {
        console.log(error)
        return NextResponse.json("Not working")
    }
}