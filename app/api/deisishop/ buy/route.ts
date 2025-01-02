export async function POST(req: Request) {
    try {
      const body = await req.json();
      const resp = await fetch(`https://deisishop.pythonanywhere.com/buy/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!resp.ok) {
        return new Response(JSON.stringify({ error: resp.statusText }), {
          status: resp.status,
        });
      }
  
      const data = await resp.json();
  
      if (data.hasOwnProperty("error")) {
        return new Response(JSON.stringify({ error: data.error }), { status: 500 });
      }
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch {
      return new Response(JSON.stringify({ error: "Erro interno no servidor" }), {
        status: 500,
      });
    }
  }
  