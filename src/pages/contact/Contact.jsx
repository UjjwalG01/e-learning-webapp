import { motion } from "framer-motion";
import { HeroSection } from "../common/HeroSection";

import img from "../../assets/images/course-bg1.jpg";
import { ContactSection } from "./section/ContactSection";
import { ContactFormSection } from "./section/ContactFormSection";

export function Contact() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ x: "-100%", transition: { duration: 0.1 } }}
            className="flex flex-col min-h-[70vh] scroll-smooth my-10 ">
            <HeroSection title={"Contact Us"} img={img} className={"text-white"} description={"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."} />
            <ContactSection />
            <ContactFormSection />
        </motion.main>
    )
}