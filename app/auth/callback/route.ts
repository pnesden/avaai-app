import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    async get(name: string) {
                        return (await cookieStore).get(name)?.value;
                    },
                    async set(name: string, value: string, options: any) {
                        try {
                            (await cookieStore).set({ name, value, ...options });
                        } catch {
                            // Handle cookie setting errors
                        }
                    },
                    async remove(name: string, options: any) {
                        try {
                            (await cookieStore).set({ name, value: '', ...options });
                        } catch {
                            // Handle cookie removal errors
                        }
                    },
                },
            }
        );

        const { data, error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error && data.user) {
            // Check if this is a new user (first time signing in)
            const { data: existingCredits } = await supabase
                .from('user_credits')
                .select('credits')
                .eq('user_id', data.user.id)
                .single();

            // If no credits record exists, this is a new user - award 100 credits
            if (!existingCredits) {
                await supabase
                    .from('user_credits')
                    .insert({
                        user_id: data.user.id,
                        credits: 100
                    });
            }
        }
    }

    // Redirect to generate page after successful authentication
    return NextResponse.redirect(new URL('/generate', request.url));
}
