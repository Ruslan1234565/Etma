
import { footer } from "@/features/service/footer/footer";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { href: string } }) {
    const { href } = params;

    const item = footer.flatMap(item => item.links).find(link => link.href === `/footer/${href}`);
   
    if (!item) {
        return NextResponse.json(
            { error: 'Footer link not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(item);
}