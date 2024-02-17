import { HeroSection } from "../common/HeroSection";
import { CourseSection } from "./sections/CourseSection";
import { courses } from "../../data/courses";
import img from "../../assets/images/courses-bg.jpg";

import { motion } from "framer-motion";

export function Courses() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ x: "100%", transition: { duration: 0.1 } }}
            className="flex flex-col min-h-[70vh] scroll-smooth my-10">
            <HeroSection title={"Online Courses on Design and Development"} className={"text-white"} img={img} description={"Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."} />
            {courses.map(items => (
                <CourseSection items={items} />
            ))}
        </motion.main>
    )
}