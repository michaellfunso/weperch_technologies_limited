
import React from "react";

import Products from "@/components/ProductsTab";
import Head from 'next/head';

<Head>
  <title>Our Products | Weperch Technologies Ltd</title>
  <meta name="description" content="Software Development Agency - Building Integrated Software Solutions for Businesses" />
  <link rel="canonical" href="https://www.weperch.live/products" />
</Head>


const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      
     <Products />

    </div>
  );
};

export default SupportPage;
