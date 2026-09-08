import React from "react";
import { motion } from "motion/react";
import { Dumbbell, Heart, SportShoe, Zap, Timer } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      name: "Weight Training",
      icon: <Dumbbell color="#f97316" />,
      timing: "Mon-Sat · 6AM-9PM",
      description:
        "Build strength and muscle with guided sessions using free weights, machines, and expert programming.",
    },
    {
      name: "Cardio & HIIT",
      icon: <SportShoe color="#f97316" />,
      timing: "Daily · 6AM-8PM",
      description:
        "High intensity interval training designed to burn fat, boost endurance, and push your limits every session.",
    },
    {
      name: "Yoga",
      icon: <Heart color="#f97316" />,
      timing: "Tue & Thu · 7AM",
      description:
        "Restore flexibility, improve posture, and find balance through guided yoga sessions for all experience levels.",
    },
  ];

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
    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-orange-500 text-sm font-semibold uppercase mb-2">
          What we offer
        </p>
        <div className="max-w-4xl mx-auto flex-center gap-4 my-3">
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-zinc-50">
            Our Training Programs
          </h2>
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {servicesData.map((item) => {
          return (
            <motion.div
              className="card"
              key={item.name}
              variants={cardVariants}
            >
              {item.icon}
              <p className="text-xl font-semibold py-2">{item.name}</p>
              <div className="border-t border-zinc-700 mt-3 pt-3">
                <p className="text-sm text-zinc-500">{item.timing}</p>
              </div>
              <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
