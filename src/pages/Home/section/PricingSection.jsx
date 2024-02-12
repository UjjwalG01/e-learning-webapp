import { PriceCard } from "../components/PriceCard";
import { SectionHead } from "../components/SectionHead";

export function PricingSection() {
    return (
        <section className="my-8 lg:my-10 px-4 lg:px-10">
            <SectionHead label={"Our Pricing"} btnLabel={"See More"} description={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            <ul className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mx-4 lg:mx-6">
                <PriceCard plan={"free"} price={"0"} />
                <PriceCard plan={"pro"} price={"79"} />
            </ul>
        </section>
    )
}