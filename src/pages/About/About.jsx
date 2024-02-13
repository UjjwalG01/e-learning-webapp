import { motion } from "framer-motion";
import { HeroSection } from "../common/HeroSection";
import { AchievementSection } from "./section/AchievementSection";
import { GoalSection } from "./section/GoalSection";
import { AboutFooterSection } from "./section/AboutFooterSection";

// images import
import img from "../../assets/images/aboutbg.png";

export function About() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ x: "100%", transition: { duration: 0.1 } }}
            className="flex flex-col min-h-[70vh] scroll-smooth my-10 ">

            <HeroSection title={"About Siksha Learning School"} img={img} description={"Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."} />
            <AchievementSection />
            <GoalSection />
            <AboutFooterSection />
        </motion.main>
    )
}