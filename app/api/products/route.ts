import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://deisishop.pythonanywhere.com/products');
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 500 }
    );
  }
}
