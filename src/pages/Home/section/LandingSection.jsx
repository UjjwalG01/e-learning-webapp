import { ButtonGray, ButtonSm } from "../../../components/Button";
import image from "../../../assets/images/reading.png"

import { Particle } from "../components/Particle";

export function LandingSection() {
    return (
        <section className="mx-auto flex flex-col items-center text-center py-8 my-8 lg:mb-20 px-4">
            <Particle />
            <div className="flex flex-col gap-2 items-center font-semibold my-2 ">
                <img src={image} alt="" className="block object-cover" />
                <h2 className="fs-800">Unlock your creative potential</h2>
            </div>
            <p className="fs-400 font-medium ">with Online Design and Development Courses.</p>
            <div className="fs-100 ">Learn from Industry Experts and Enhance Your Skills.</div>
            <div className="flex gap-3 mt-8">
                <ButtonSm goTo={"/courses"} label={"Explore Courses"} type={"button"} />
                <ButtonGray goTo={"/pricing"} label={"View Pricing"} type={"button"} />
            </div>
        </section>
    )
}