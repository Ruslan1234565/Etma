import { pressData } from "@/features/service/press/press";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(pressData);
}
