import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @GlobalTech",
    image: image1,
    content:
      "Weperch’s innovative solutions have significantly boosted our operational efficiency and customer engagement. Their tailored approach is a true game changer.",
  },
  {
    id: 2,
    name: "Chinedu Okafor",
    designation: "@TechNaija",
    image: image2,
    content:
      "Working with Weperch has transformed our digital strategy. Their expertise and commitment have helped us streamline processes and drive sustainable growth.",
  },
  {
    id: 3,
    name: "John Abraham",
    designation: "",
    image: image1,
    content:
      "The team at Weperch delivers exceptional digital solutions that have enabled us to expand our market reach. Their innovative mindset is truly impressive.",
  },
  {
    id: 4,
    name: "Ngozi Nwosu",
    designation: "Managing Director @NaijaSolutions",
    image: image2,
    content:
      "Weperch understands the unique challenges of our market and offers custom solutions that deliver real results. Their partnership has been invaluable to our success.",
  },
];
