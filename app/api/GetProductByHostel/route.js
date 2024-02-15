import { connectDBP } from "@/lib/connectDBP";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function Post(req){
    const {hostel} = await req.json();
    try {
        connectDBP();
        const hostelItem = await prisma.post.findMany({
            where: {
                hostel: {
               
                    equals: hostel
                  
                }
              }
        })
        console.log(hostelItem);
        return NextResponse({hostelItem});
    } catch (error) {
        return NextResponse({"error":"Not able to find items due to server issue"})
    }
}