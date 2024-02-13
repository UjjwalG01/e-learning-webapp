import { AboutHead } from "../components/AboutHead";
import { AboutSectionCards } from "../components/AboutSectionCards";

export function AchievementSection() {
    return (
        <section className="px-4 md:px-6 lg:px-8 my-8">
            <AboutHead title={"Achievements"} description={"Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"} />
            <AboutSectionCards section={"achievement"} />
        </section>
    )
}