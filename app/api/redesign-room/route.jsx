import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth:process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});
export async function POST(req){

    // const {user} = useUser();
    const {imageUrl, roomType, DesignType, additionalReq} = await req.json();

    try{
        const input = {
            image: imageUrl,
            prompt: 'A '+roomType+' room with a '+DesignType+' style interior. '+additionalReq+''
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        console.log(output);
        // return NextResponse.json({result: output})

        // const output = "https://replicate.delivery/xezq/sUs6FDrAYDbKDVbmGNsQfnHgSY7Kw1rsZbBaGPYefDhT5HRoA/out.png";
        const base64Image = await ConvertImageToBase64(output);
        const fileName=Date.now()+".png";
        const storageRef = ref(storage, 'room-redesign/'+fileName);
        await uploadString(storageRef, base64Image, 'data_url');
        const downloadUrl = await getDownloadURL(storageRef);
        // return NextResponse.json({result: downloadUrl});
        const dbResult = await db.insert(AiGeneratedImage).values({
            roomType:roomType,
            designType:DesignType,
            orgImage:imageUrl,
            aiImage:downloadUrl,
            userEmail:""

        }).returning({id:AiGeneratedImage.id});
        console.log(dbResult);

        return NextResponse.json({'result': dbResult});

        



    }catch(e){
        return NextResponse.json({error123455: e.message})

    }

}
  
async function ConvertImageToBase64(imageUrl){
    const resp = await axios.get(imageUrl,{responseType: 'arraybuffer'});
    const base64ImageRaw = Buffer.from(resp.data).toString('base64');

    return "data:image/png;base64,"+base64ImageRaw;
}