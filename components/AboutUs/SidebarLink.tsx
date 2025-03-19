"use client";
import React from "react";

const SidebarLink = ({ selectedSection, onSectionSelect }) => {
  // Define the sidebar sections
  const sections = [
    { id: "about", label: "About Us" },
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
  ];

  return (
    <>
      {sections.map((section) => (
        <li key={section.id}>
          <button
            onClick={() => onSectionSelect(section.id)}
            className={`flex w-full rounded-sm px-3 py-2 text-base ${
              selectedSection === section.id
                ? "bg-stroke text-black dark:bg-blackho dark:text-white"
                : "text-black dark:text-white"
            }`}
          >
            {section.label}
          </button>
        </li>
      ))}
    </>
  );
};

export default SidebarLink;
