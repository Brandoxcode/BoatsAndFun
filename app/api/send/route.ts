
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
<<<<<<< HEAD
            from: 'Boats and Fun <onboarding@resend.dev>',
            to: ['brandon.a2001@outlook.es', email],
=======
            from: 'Boats and Fun <noreply@boatsandfunorders.com>',
            to: ['reservations@boatsandfun.com', email],
>>>>>>> 7641cc9a961ac0bf5c996dc988969c8af6bb9910
            subject: name + ' ' + 'Seafood Order',
            react: EmailTemplate({ item, name, number, email, memo }),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}
