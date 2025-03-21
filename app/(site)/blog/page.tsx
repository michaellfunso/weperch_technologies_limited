import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weperch Team",

  // other metadata
  description: "Meet Our Team!"
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Our Team`,
                subtitle: `Innovators. Builders. Partners.`,
                description:
                  `Our team is the driving force behind every digital transformation we deliver. United by a shared passion for innovation, we combine global insights with local expertise to craft solutions that empower businesses to thrive in an ever-evolving digital landscape. From visionary strategists and expert developers to creative designers and dedicated support specialists, each member brings unique skills and unwavering commitment to turning challenges into opportunities — helping you achieve sustainable growth and lasting success.`
,
              }}
            />
          </div>
          {/* Section Title End */}
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
