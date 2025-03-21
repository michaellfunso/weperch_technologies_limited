"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Integration from "../Integration";
import NotificationPopup from "../NotificationPopup";
import { useForm, ValidationError } from '@formspree/react';


const messages = [
  "Innovative Software Solutions",
  "Scalable Commerce Platforms",
  "Custom Enterprise Development",
  "Cost-Effective Solutions",
  "Reliable Software Architecture"
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  // Delay the initial appearance of the text by 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % messages.length);
      }, 6000); // Cycle every 6 seconds after the text has appeared
      return () => clearInterval(interval);
    }
  }, [show]);

  if (!show) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={messages[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-4xl font-bold text-center">
          {messages[index]}
        </h2>
      </motion.div>
    </AnimatePresence>
  );
};

const Hero = () => {
  const [email, setEmail] = useState("");

  const [state, handleSubmit] = useForm("mqapebyk");
  const [showNotification, setShowNotification] = useState(false);



  // Trigger notification when form submission succeeds
  if (state.succeeded && !showNotification) {
    setShowNotification(true);
    setEmail('')
  }
  

  // Scrolls to the hero section below the video background.
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    {showNotification && (
        <NotificationPopup onClose={() => setShowNotification(false)} />
      )}
      {/* Full-screen video background section with overlay */}
      <section className="relative h-screen w-full">
        <video
          className="absolute inset-0 object-cover w-full h-full z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/diml8ljwa/video/upload/v1742350836/mxnpwxlcnpvhmcn37ofp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {/* Animated text centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <AnimatedText />
        </div>
        {/* Scroll button at bottom center */}
        <div className="absolute inset-x-0 bottom-10 flex justify-center z-20">
          <button
            onClick={scrollToHero}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Scroll Down
          </button>
        </div>
      </section>

      <Integration />

      {/* Hero section */}
      <section
        className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Next-Gen Software Development & Commerce Solutions
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Transforming Your Vision into Digital Reality with{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Custom Software
                </span>
              </h1>
              <p>
                We empower businesses with scalable, secure, and intuitive commerce
                solutions. Whether you need innovative products or custom software
                for enterprise-level projects, our expert team is here to drive your
                business forward.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                    id="email"
                    type="email" 
                    name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-7.5 py-4.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      required
                    />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                    <button
                    type="submit" disabled={state.submitting}
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-4.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Experience our solutions – no fuzz!
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="Abstract design element"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="Abstract design element"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="Abstract design element"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_right"
                >
                  <div className="relative aspect-[700/444] w-full">
                    <Image
                      className="animate-right dark:hidden"
                      src="/images/hero/hero-light-1.svg"
                      alt="Hero image for light mode"
                      fill
                    />
                    <Image

                      className="animate-right hidden dark:block"
                      src="/images/hero/hero-dark-1.svg"
                      alt="Hero image for dark mode"
                      fill
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
