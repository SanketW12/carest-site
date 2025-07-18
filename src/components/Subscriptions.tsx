import React, { useState } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    priceMonthly: 0,
    priceYearly: 0,
    savings: 0,
    features: [
      "Free Medicine Delivery - Once a month",
      "Health Tests - Once a month",
    ],
    limitedFeatures: [],
    button: "Start Now",
    link: "#",
  },
  {
    name: "Standard",
    priceMonthly: 299,
    priceYearly: 2999,
    savings: 0,
    features: [
      "Free Medicine Delivery - twice a month",
      "Health Tests - Twice a month",
      "Doctor Appointments Near You - Twice a month",
      "Free Hospital Transport - Twice a month",
    ],
    limitedFeatures: [],
    button: "Buy Now",
    link: "#",
    mostPopular: true,
  },
  {
    name: "Premium",
    priceMonthly: 599,
    priceYearly: 5999,
    savings: 0,
    features: [
      "Free Medicine Delivery - Unlimited",
      "Health Tests - Unlimited",
      "Doctor Appointments Near You - Unlimited",
      "Free Hospital Transport - Twice a week",
    ],
    button: "Buy Now",
    link: "#",
  },
];

export default function Subscriptions() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 text-white text-center px-4 bg-opacity-35">
      <h2 className="text-4xl font-bold mb-2">Subscriptions</h2>

      <div className="flex justify-center items-center mb-8 gap-2">
        <div
          className="relative inline-flex items-center cursor-pointer bg-white rounded-full px-1 py-1"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`text-sm rounded-full px-3 py-1 font-semibold transition-all duration-300 ${
              isYearly ? "bg-purple-500 text-white" : "text-black"
            }`}
          >
            Annually
          </div>
          <div
            className={`text-sm rounded-full px-3 py-1 font-semibold transition-all duration-300 ${
              !isYearly ? "bg-purple-500 text-white" : "text-black"
            }`}
          >
            Monthly
          </div>
        </div>
        <span className="bg-white text-[#0071c2] text-xs px-2 py-1 rounded font-medium">
          Save 25%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white text-black rounded-xl shadow p-6 flex flex-col justify-between relative"
          >
            {plan.mostPopular && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            )}
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">
                {plan.name}
              </h3>
              <div className="text-4xl font-extrabold mb-1">
                ₹
                {isYearly
                  ? (plan.priceYearly / 12).toFixed(0)
                  : plan.priceMonthly}
                <span className="text-lg font-medium"> /month</span>
              </div>
              <div className="text-gray-500 mb-2">
                ₹
                {isYearly
                  ? plan.priceYearly
                  : (plan.priceMonthly * 12).toFixed(0)}{" "}
                / year
              </div>
              {/* {plan.savings && isYearly && (
                <div className="text-sm text-green-500 font-medium mb-2">
                  You save ₹{plan.savings} a year
                </div>
              )} */}
              <ul className="text-left space-y-2 mt-4">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-2" key={feature}>
                    <Check className="text-green-600 h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.limitedFeatures?.map((feature) => (
                  <li
                    className="flex items-center gap-2 text-gray-400 line-through"
                    key={feature}
                  >
                    <X className="h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.link}
              className={`mt-6 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold text-sm `}
            >
              {plan.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
