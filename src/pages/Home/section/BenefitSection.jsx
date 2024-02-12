import { BenefitCard } from "../components/BenefitCard";
import { benefits } from "../../../data/Benefits";
import { SectionHead } from "../components/SectionHead";

export function BenefitSection() {
    return (
        <section id="benefits" className="my-8 lg:my-10 px-4 lg:px-10">
            <SectionHead label={"Benefits"} btnLabel={"View All"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo officiis nihil? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam assumenda ab est?"} />
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 place-items-center mt-10">
                {benefits.map(benefit => (
                    <BenefitCard key={benefit.index} index={benefit.index} title={benefit.title} description={benefit.description} link={benefit.link} />
                ))}
            </ul>
        </section>
    )
}