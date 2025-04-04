
import React from "react";

import Pricing from "@/components/Pricing";
import Head from 'next/head';

<Head>
  <title>Our Pricing | Weperch Technologies Ltd</title>
  <meta name="description" content="Software Development Agency - Building Integrated Software Solutions for Businesses" />
  <link rel="canonical" href="https://www.weperch.live/pricing" />
</Head>


const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      
     <Pricing />

    </div>
  );
};

export default SupportPage;
