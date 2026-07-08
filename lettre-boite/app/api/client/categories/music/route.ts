import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const body = await request.json();
    const { albumName } = body;

    const res = await fetch(`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(albumName)}&fmt=json`, {
        method: "GET",
        headers: {'User-Agent': 'MonApplicationLettreBoite/1.0.0 (florian.warin05@gmail.com)'},
    });

    if(!res) { return NextResponse.json({ error: 'Could not find the album' }, { status: 500})};

    const data = await res.json();

    return NextResponse.json(data)

}