
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { item, name, email, number, memo } = body
        console.log('body', body)
        const data = await resend.emails.send({
            from: 'Boats and Fun <onboarding@resend.dev>',
            to: ['brandon.a2001@outlook.es', email],
            subject: name + ' ' + 'sea food order',
            react: EmailTemplate({ item, name, number, email, memo }),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}
