


export async function POST(req: Request) {
    const { query } = await req.json();

    try {
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);
        const results = await response.json();

        return new Response(JSON.stringify(results));
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
