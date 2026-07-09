import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { query } = body;

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch from OpenLibrary' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
