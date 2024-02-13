import { achievements, goals } from "../../../data/about";
import { SingleCard } from "./SingleCard";

export function AboutSectionCards({ section }) {
    return (
        <ul className="grid sm:grid-cols-2 gap-4 my-4">
            {section == "achievement" ? achievements.map(ach => (
                <SingleCard icon={ach.icon} title={ach.title} description={ach.description} />
            )) : goals.map(ach => (
                <SingleCard icon={ach.icon} title={ach.title} description={ach.description} />
            ))
            }
        </ul>
    )
}