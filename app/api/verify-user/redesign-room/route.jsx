import { NextResponse } from "next/server";

export async function POST(req){

    const {imageUrl, roomType, DesignType, additionalReq} = await req.json();








    return NextResponse.json({result: "Hello World!"})
}