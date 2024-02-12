import Video from "./section/Video";
import { BrandSection } from "./section/BrandSection";
import { LandingSection } from "./section/LandingSection";
import { CourseSection } from "./section/CourseSection";
import { BenefitSection } from "./section/BenefitSection";
import { TestimonialSection } from "./section/TestimonialSection";
import { PricingSection } from "./section/PricingSection";
import { FAQsSection } from "./section/FAQsSection";

import { motion } from "framer-motion";

export function Home() {
    return (
        <motion.main
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "-100%", transition: { duration: 0.1 } }}
            className="flex flex-col justify-around min-h-[70vh] scroll-smooth mt-6">
            <LandingSection />
            <BrandSection />
            <Video />
            <BenefitSection />
            <CourseSection />
            <TestimonialSection />
            <PricingSection />
            <FAQsSection />
        </motion.main>
    )
}