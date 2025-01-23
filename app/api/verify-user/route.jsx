import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {user} = await req.json();

    // If user Already Exists?

    try {
        const userInfo = await db.select().from(Users)
        .where(eq(Users.email,user?.primaryEmailAddress.emailAddress))
        console.log('User',userInfo)

        // If not will add new user to DB
    if(userInfo?.length==0){
        const SaveResult=await db.insert(Users)
        .values({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            imageUrl: user?.imageUrl,
        }).returning({id:Users.id})

        return NextResponse.json({'result':SaveResult[0]})
    }    
    return NextResponse.json({'result':userInfo[0]})
    } catch (e) {
        return NextResponse.json({error: e.message});
    }

    // // If not Will add new user to DB
    // return NextResponse.json({result: user});
}