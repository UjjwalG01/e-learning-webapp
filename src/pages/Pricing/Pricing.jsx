import { motion } from "framer-motion";
import { HeroSection } from "../common/HeroSection";

import img from "../../assets/images/price-bg.jpg"
import { AllPriceCards } from "./section/AllPriceCards";
import { FAQsSection } from "../Home/section/FAQsSection";

export function Pricing() {

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ x: "-100%", transition: { duration: 0.2 } }}
            className="flex flex-col min-h-[70vh] scroll-smooth my-10">
            <HeroSection title={"Our Pricings"} img={img} className={"text-white"} description={"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."} />
            <AllPriceCards />
            <FAQsSection className={"bg-slate-200 rounded-md py-8 lg:max-w-[100rem]"} />
        </motion.main>
    )
}