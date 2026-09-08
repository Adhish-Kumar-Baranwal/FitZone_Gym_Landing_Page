import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "per month",
      description:
        "Perfect for beginners looking to start their fitness journey.",
      features: [
        "Access to gym floor",
        "Cardio equipment access",
        "2 group classes per month",
        "Locker room access",
        "Free fitness assessment",
      ],
      highlighted: false,
      cta: "Get started",
    },
    {
      name: "Standard",
      price: "₹1,799",
      period: "per month",
      description: "Our most popular plan for serious fitness enthusiasts.",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "1 personal training session/month",
        "Nutrition consultation",
        "Access to all equipment",
        "Guest pass once a month",
      ],
      highlighted: true,
      cta: "Get started",
    },
    {
      name: "Premium",
      price: "₹2,999",
      period: "per month",
      description:
        "The ultimate fitness experience with full personal attention.",
      features: [
        "Everything in Standard",
        "4 personal training sessions/month",
        "Custom meal plan",
        "Priority class booking",
        "Free merchandise",
        "24/7 gym access",
        "Monthly body composition analysis",
      ],
      highlighted: false,
      cta: "Get started",
    },
  ];

  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="px-4 md:px-10 lg:px-16 py-8 md:py-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className=" text-sm text-orange-500 uppercase font-semibold mb-2">
          Pricing Plans
        </p>
        <div className="max-w-4xl mx-auto flex-center gap-4 my-3">
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            Choose the right plan for you
          </p>
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {plans.map((plan) => {
          return (
            <motion.div
              key={plan.name}
              className={`rounded-lg border p-6 flex flex-col gap-4 bg-zinc-900 md:last:col-span-2 md:last:max-w-md md:last:mx-auto lg:last:col-span-1 lg:last:max-w-none ${plan.highlighted ? "border-amber-500" : "border-zinc-800"}`}
              variants={cardVariants}
            >
              {plan.highlighted && (
                <span className="text-xs text-orange-500 font-semibold">
                  Most Popular
                </span>
              )}

              <p className="text-2xl text-orange-500 py-1.5 font-semibold">
                {plan.name}
              </p>
              <div>
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-zinc-400"> {plan.period}</span>
              </div>
              <p className="text-sm text-zinc-400 py-4">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => {
                  return (
                    <li
                      key={feature}
                      className="text-sm text-zinc-300 flex gap-2 py-1"
                    >
                      <span className="text-orange-500">✓</span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={() =>
                  navigate("/contact", {
                    state: {
                      subject: `Enquiry about ${plan.name} Plan`,
                      message: `Hi, I'm interested in the ${plan.name} plan (${plan.price} ${plan.period}). Please share more details.`,
                    },
                  })
                }
                className={`pricing-btns ${plan.highlighted ? "pricing-btns-highlighted" : "pricing-btns-non-highlighted"}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Pricing;
