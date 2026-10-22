import { NextResponse } from "next/server";
import destinations from "@/components/Experiences/mockup.json"

export default async function GET(){
    return NextResponse.json(destinations);
}