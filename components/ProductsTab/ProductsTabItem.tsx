import React from "react";
import { ProductTab } from "@/types/productTab";
import Image from "next/image";

const ProductsTabItem = ({ featureTab }: { featureTab: ProductTab }) => {
  const { title, desc1, desc2, image, imageDark, link } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <code className="mb-5">{desc1}</code>
          <code className="w-11/12">{desc2}</code>
          <button
                aria-label="Check it out"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
               <a href={link}>
                <span className="duration-300 group-hover/btn:pr-2">
                Check it out!
                </span>
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
          
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2 rounded-lg overflow-hidden border border-transparent hover:border-blue-500 transition-colors">
        <a href={link} target="_blank"><Image src={image} alt={title} fill className="dark:hidden" /></a> 
         <a href={link} target="_blank"><Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          /></a>
        </div>
      </div>
    </>
  );
};

export default ProductsTabItem;
