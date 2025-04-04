import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

import Head from 'next/head';

<Head>
  <title>Home | Weperch Technologies Ltd</title>
  <meta name="description" content="Software Development Agency - Building Integrated Software Solutions for Businesses" />
  <link rel="canonical" href="https://www.weperch.live/" />
</Head>

export const metadata: Metadata = {
  title: "Weperch Technologies Limited | Empowering Businesses through innovative digital solutions that streamline operations and drive sustainable growth.",

  // other metadata
  description: "We build integrated software solutions for businesses"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <CTA />
      <FAQ />
      <Testimonial />
      <Blog />
      <Contact />
    </main>
  );
}
