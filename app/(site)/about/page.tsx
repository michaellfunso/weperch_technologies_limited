// app/(site)/about/page.tsx
import SidebarLink from "@/components/AboutUs/SidebarLink";
import DynamicAboutContent from "@/components/AboutUs/DynamicAboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Weperch Technologies Limited",
  description: "About Weperch Technologies Limited",
};

export default function DocsPage() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
  <div className="container mx-auto px-4">
    <DynamicAboutContent />
  </div>
</section>
  );
}
