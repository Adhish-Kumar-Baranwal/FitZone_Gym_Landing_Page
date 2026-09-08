import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const testimonialsData = [
    {
      name: "Rahul Sharma",
      memberSince: "Member since 2022",
      review:
        "FitZone completely transformed my lifestyle. The trainers are incredibly knowledgeable and the equipment is always well maintained. Best decision I ever made.",
      rating: 4.5,
    },
    {
      name: "Priya Desai",
      memberSince: "Member since 2021",
      review:
        "I was a complete beginner when I joined. The trainers made me feel comfortable from day one and the results I've seen in 6 months are unbelievable.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      memberSince: "Member since 2023",
      review:
        "The Cardio & HIIT classes are intense in the best way possible. Great community, great energy. I look forward to coming here every single day.",
      rating: 5,
    },
    {
      name: "Sneha Kulkarni",
      memberSince: "Member since 2022",
      review:
        "The yoga sessions here are unlike anything I've tried before. Calm, focused, and perfectly structured. FitZone has something for everyone.",
      rating: 5,
    },
    {
      name: "Vikram Joshi",
      memberSince: "Member since 2020",
      review:
        "Been a member for 4 years and I have no plans of leaving. The staff knows your name, the facility is always clean, and the results speak for themselves.",
      rating: 5,
    },
  ];

  return (
    <div id="home">
      <Hero />
      <Services />
      <Testimonials
        data={testimonialsData}
        heading="Testimonials"
        subheading="What our gym members say about us"
      />
    </div>
  );
};

export default Home;
