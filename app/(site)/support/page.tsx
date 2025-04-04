import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Head from 'next/head';

<Head>
  <title>Support | Weperch Technologies Ltd</title>
  <meta name="description" content="Software Development Agency - Building Integrated Software Solutions for Businesses" />
  <link rel="canonical" href="https://www.weperch.live/support" />
</Head>

export const metadata: Metadata = {
  title: "Support Page - Weperch Technologies Limited",

  // other metadata
  description: "This is Support page for our Agency"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
