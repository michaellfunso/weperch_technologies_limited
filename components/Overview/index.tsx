"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Overview = () => {
  return (
    <>
    <div id="hero-section"></div>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mt-40">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
          headerInfo={{
            title: "OVERVIEW",
            subtitle: "Empowering Your Business with Custom Digital Solutions",
            description:
              "...",
          }}

          />
          
          <section className="py-16 px-4 md:px-8 lg:py-24">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
               
                
                {/* Detailed Overview Content */}
                <div className="space-y-6 text-left">
                  <p>
                    Our Enterprise Solutions are designed to bridge the gap between traditional business practices and innovative digital strategies. We collaborate with industry leaders to understand your unique challenges, ensuring that every solution is tailored to optimize your operations while preparing you for future growth.
                  </p>
                  <p>
                    By leveraging robust software architectures, secure commerce platforms, and advanced analytics, we empower enterprises to streamline workflows, enhance customer engagement, and make informed, data-driven decisions. Our focus on security and scalability ensures that your technology not only meets today's demands but also adapts seamlessly as your business evolves.
                  </p>
                  <p>
                    At the core of our approach is a commitment to excellence, continuous innovation, and meaningful partnerships. With global insights and local expertise, Weperch is dedicated to delivering measurable results that drive lasting digital transformation. Let us help you turn challenges into opportunities and position your business for success in the digital era.
                  </p>
                </div>
              </div>
            </div>
          </section>
          

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-y-10">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-07.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-08.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-09.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-10.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-11.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-12.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
