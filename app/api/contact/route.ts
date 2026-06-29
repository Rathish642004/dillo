import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\+\-\(\)]{7,20}$/;

function sanitize(val: unknown, maxLen: number): string | null {
  if (typeof val !== 'string') return null;
  return val.trim().slice(0, maxLen) || null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name        = sanitize(body.name, 100);
    const company     = sanitize(body.company, 150);
    const phone       = sanitize(body.phone, 20);
    const email       = sanitize(body.email, 254);
    const requirement = sanitize(body.requirement, 200);
    const quantity    = sanitize(body.quantity, 50);
    const message     = sanitize(body.message, 1000);

    if (!name || !company || !phone || !requirement) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!PHONE_RE.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }
    if (email && !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    const { error } = await supabase.from('quote_requests').insert({
      name, company, phone, email,
      requirement, quantity,
      message,
      status: 'new',
    });

    if (error) {
      console.error('quote_requests insert:', error);
      return NextResponse.json({ error: 'Failed to save request' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
