import { AboutHead } from "../components/AboutHead";
import { AboutSectionCards } from "../components/AboutSectionCards";

export function GoalSection() {
    return (
        <section className="px-4 md:px-6 lg:px-8">
            <AboutHead title={"Our Goals"} description={"At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"} />
            <AboutSectionCards section={"goals"} />
        </section>
    )
}