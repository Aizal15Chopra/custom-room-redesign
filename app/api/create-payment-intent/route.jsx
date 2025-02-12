import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const CREDIT_PRICES = {
  5: 99, // $0.99
  10: 199, // $1.99
  25: 399, // $3.99
  50: 699, // $6.99
  100: 999, // $9.99
};

export async function POST(request) {
  try {
    const { credits } = await request.json();
    
    if (!CREDIT_PRICES[credits]) {
      return NextResponse.json(
        { error: "Invalid credit amount" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: CREDIT_PRICES[credits],
      currency: "usd",
      metadata: {
        credits: credits,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating payment intent" },
      { status: 500 }
    );
  }
}