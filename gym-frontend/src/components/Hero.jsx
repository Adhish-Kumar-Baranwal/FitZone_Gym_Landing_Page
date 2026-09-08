import React from "react";
import gymDark from "../assets/gymDark.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="px-16 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, #09090b 20%, rgba(9,9,11,0.6)), url('${gymDark}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.p
        className="tracking-widest my-3  text-zinc-400 text-sm"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        PREMIUM GYM · PIMPRI
      </motion.p>
      <motion.h2
        className="my-2 text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        Train Harder.
      </motion.h2>
      <motion.h2
        className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        Get Stronger.
      </motion.h2>
      <motion.p
        className="mt-3 mb-5 text-zinc-400"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >
        World-class equipment, expert trainers, <br />
        and a community that pushes you forward.
      </motion.p>
      <motion.button
        onClick={() => navigate("/contact")}
        className="cta-btn w-fit"
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 1,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut", delay: 2 },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.5, ease: "easeInOut", delay: 0 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.5, ease: "easeInOut",delay: 0 } }}
      >
        Join Now →
      </motion.button>
    </section>
  );
};

export default Hero;
