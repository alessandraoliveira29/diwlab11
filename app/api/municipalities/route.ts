import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.carrismetropolitana.pt/municipalities');
    if (!res.ok) {
      throw new Error(`Failed to fetch municipalities: ${res.statusText}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
