// components/AboutUs/DynamicAboutContent.tsx
"use client";
import { useState } from "react";

const DynamicAboutContent = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const renderContent = () => {
    switch (selectedSection) {
      case "about":
        return (
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>About Weperch Technologies Limited</h1>
            <p className="text-body-color dark:text-body-color-dark text-base">
              At Weperch Technologies Limited, we transform business challenges into digital opportunities. Founded with a vision to empower companies in today’s dynamic marketplace, we specialize in crafting bespoke digital solutions and commerce platforms that drive operational efficiency and foster sustainable growth.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Our agile team blends global insights with local expertise, ensuring that every project is uniquely tailored to meet our clients’ needs. By leveraging cutting-edge technologies and best practices, we develop secure, scalable, and intuitive software solutions that not only streamline operations but also elevate customer experiences.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Innovation, collaboration, and continuous improvement are at the heart of our culture. We believe in nurturing talent and fostering a supportive environment where creative ideas flourish and every voice is valued. This commitment to excellence and a client-centric approach has helped us build lasting partnerships and deliver real, measurable results.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Join us on our journey as we redefine digital innovation. At Weperch Technologies Limited, we’re more than just a technology provider—we’re your dedicated partner in achieving lasting success in a digital world.
            </p>
          </div>
        );
      case "mission":
        return (
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>Our Mission</h1>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Our mission is to empower businesses through innovative digital solutions that streamline operations and drive sustainable growth. We’re committed to transforming challenges into opportunities by delivering customized, secure, and scalable technology.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              At Weperch, we continuously strive to create products that not only meet the needs of our clients today but also pave the way for future success.
            </p>
          </div>
        );
      case "vision":
        return (
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>Our Vision</h1>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Our vision is to become the most trusted partner in digital transformation, known for our innovative approach and commitment to our clients’ success. We aspire to drive progress by connecting businesses with cutting-edge technology that makes a real difference.
            </p>
            <p className="text-body-color dark:text-body-color-dark text-base">
              Through continuous innovation and a relentless focus on quality, Weperch aims to shape a future where digital solutions empower every business to reach its full potential.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-8">
        {/* You can create buttons or links here to update the section */}
        <button
          onClick={() => setSelectedSection("about")}
          className={`mr-4 rounded px-4 py-2 ${
            selectedSection === "about" ? "bg-stroke text-black dark:bg-blackho dark:text-white" : "bg-transparent text-black dark:text-white"
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => setSelectedSection("mission")}
          className={`mr-4 rounded px-4 py-2 ${
            selectedSection === "mission" ? "bg-stroke text-black dark:bg-blackho dark:text-white" : "bg-transparent text-black dark:text-white"
          }`}
        >
          Our Mission
        </button>
        <button
          onClick={() => setSelectedSection("vision")}
          className={`mr-4 rounded px-4 py-2 ${
            selectedSection === "vision" ? "bg-stroke text-black dark:bg-blackho dark:text-white" : "bg-transparent text-black dark:text-white"
          }`}
        >
          Our Vision
        </button>
      </div>
      {renderContent()}
    </>
  );
};

export default DynamicAboutContent;
