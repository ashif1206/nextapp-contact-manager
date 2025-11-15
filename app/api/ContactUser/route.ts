import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import contactModel from "../../../model/ContactModel";



await connectDB()

export async function POST(req:Request){
    try{
        const res = await req.json();
        
        if(res.phoneNumber.length !== 10){
            return NextResponse.json({ok:false,message:"Phone number digit should be 10"})
        }
        const contact = await contactModel.create(res);
        return NextResponse.json({ok:true,contact},{status:201})
}catch(e:any){
    throw new Error(e.message)
}
}

export async function GET(req:Request){
try{
    const contact = await contactModel.find().sort({createdAt: -1 }).lean();
    return NextResponse.json({ok:true,contact},{status:200})
}catch(e:any){
    throw new Error(e.message)
}
}