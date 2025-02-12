"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react";

const creditPlans = [
  { credits: 5, price: "$0.99" },
  { credits: 10, price: "$1.99" },
  { credits: 25, price: "$3.99" },
  { credits: 50, price: "$6.99" },
  { credits: 100, price: "$9.99" },
];

export default function BuyCreditsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Buy More Credits
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock endless possibilities – Buy more credits and transform your room with AI magic!{" "}
          <span role="img" aria-label="sparkles and robot">
            ✨🤖
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {creditPlans.map((plan) => (
          <Card
            key={plan.credits}
            className="relative overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <div className="p-6 flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{plan.credits}</div>
              <div className="text-lg text-gray-600 mb-6">Credits</div>
              <Button
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white mb-4"
                onClick={() => {
                  // Handle purchase logic here
                  console.log(`Selected ${plan.credits} credits plan`);
                }}
              >
                Select
              </Button>
              <div className="text-xl font-semibold text-[#7C3AED]">
                {plan.price}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@airoom.design"
            className="text-[#7C3AED] hover:text-[#6D28D9]"
          >
            aizal@ualberta.ca
          </a>
        </p>
      </div>
    </div>
  );
}