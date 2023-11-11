
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { item } = body
        console.log('body', body)
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['brandon.a2001@outlook.es'],
            subject: 'Hello world',
            react: EmailTemplate({ item }),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}
