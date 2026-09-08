import React from "react";
import { motion } from "motion/react";
import Testimonials from "../components/Testimonials";
``;

const Trainers = () => {
  const trainers = [
    {
      name: "Rohit Kapoor",
      specialization: "Weight Training Coach",
      experience: "8 years experience",
      bio: "Certified strength and conditioning specialist with a passion for helping members build muscle and improve overall fitness.",
      image: "src/assets/trainers/rohit-kapoor.jpg",
    },
    {
      name: "Sneha Patil",
      specialization: "Yoga & Flexibility Coach",
      experience: "6 years experience",
      bio: "Experienced yoga instructor focused on mindfulness, flexibility, and helping members find balance between strength and recovery.",
      image: "src/assets/trainers/sneha-patil.jpg",
    },
    {
      name: "Aryan Desai",
      specialization: "Cardio & HIIT Coach",
      experience: "5 years experience",
      bio: "High energy HIIT specialist who designs intense but achievable workouts that push members beyond their limits safely.",
      image: "src/assets/trainers/aryan-desai.jpg",
    },
    {
      name: "Priya Mehta",
      specialization: "Nutrition & Wellness Coach",
      experience: "7 years experience",
      bio: "Certified nutritionist and wellness coach helping members pair their training with the right diet for maximum results.",
      image: "src/assets/trainers/priya-mehta.jpg",
    },
  ];

  const trainerTestimonials = [
    {
      name: "Karan Singh",
      memberSince: "Trained with Rohit since 2023",
      rating: 5,
      review:
        "Rohit completely changed how I approach weight training. His form corrections alone prevented what could have been a serious injury.",
    },
    {
      name: "Ananya Rao",
      memberSince: "Trained with Sneha since 2022",
      rating: 5,
      review:
        "Sneha's yoga sessions are the calmest part of my week. She somehow makes flexibility training feel achievable even for someone as stiff as me.",
    },
    {
      name: "Dev Patel",
      memberSince: "Trained with Aryan since 2023",
      rating: 5,
      review:
        "Aryan's HIIT sessions are brutal but in the best way. I've never sweated this much in my life and I'm finally seeing real results.",
    },
    {
      name: "Meera Iyer",
      memberSince: "Trained with Priya since 2021",
      rating: 5,
      review:
        "Priya's nutrition plan combined with my training completely changed my body composition. She actually listens to what works for your lifestyle.",
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
    <div>
      <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10 lg:py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className=" text-sm text-orange-500 uppercase font-semibold mb-2">
            Our Trainers
          </p>
          <div className="max-w-4xl mx-auto flex-center gap-4 my-3">
            <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
            <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
              Choose the trainer that fits your need
            </p>
            <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {trainers.map((trainer) => {
            return (
              <motion.div
                key={trainer.name}
                className="border flex flex-col bg-zinc-900 justify-center items-center gap-4 p-5 rounded-md border-zinc-600"
                variants={cardVariants}
              >
                <img
                  src={trainer.image}
                  alt="trainer image"
                  className="w-20 md:w-30 lg:w-40 rounded-full"
                />
                <div className="text-center">
                  <p className="text-2xl font-semibold py-2 text-orange-500">
                    {trainer.name}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {trainer.specialization}
                  </p>
                  <p className="text-sm text-zinc-400">{trainer.experience}</p>
                  <p className="text-lg py-2">{trainer.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <Testimonials
        data={trainerTestimonials}
        heading="SUCCESS STORIES"
        subheading="What our clients say about our trainers"
      />
    </div>
  );
};

export default Trainers;
