// app/(site)/about/page.tsx
import SidebarLink from "@/components/AboutUs/SidebarLink";
import DynamicAboutContent from "@/components/AboutUs/DynamicAboutContent";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import Head from 'next/head';

<Head>
  <title>About Us | Weperch Technologies Ltd</title>
  <meta name="description" content="Software Development Agency - Building Integrated Software Solutions for Businesses" />
  <link rel="canonical" href="https://www.weperch.live/about" />
</Head>

export const metadata: Metadata = {
  title: "About Weperch Technologies Limited",
  description: "About Weperch Technologies Limited",
};

export default function DocsPage() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `The Company`,
                subtitle: `Weperch Technologies Limited`,
                description:
                  `...`
,
              }}
            />
          </div>
          {/* Section Title End */}
        </div>
  <div className="animate_top container mx-auto px-4">
    <DynamicAboutContent />
  </div>
</section>
  );
}
