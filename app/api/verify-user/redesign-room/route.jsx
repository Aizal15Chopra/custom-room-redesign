import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth:process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});
export async function POST(req){

    const {imageUrl, roomType, DesignType, additionalReq} = await req.json();

    try{
        const input = {
            image: "https://replicate.delivery/pbxt/KhTNuTIKK1F1tvVl8e7mqOlhR3z3D0SAojAMN8BNftCvAubM/bedroom_3.jpg",
            prompt: "A bedroom with a bohemian spirit centered around a relaxed canopy bed complemented by a large macrame wall hanging. An eclectic dresser serves as a unique storage solution while an array of potted plants brings life and color to the room"
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        console.log(output);

    }catch(e){

    }







    return NextResponse.json({result: "Hello World!"})
}