import { PriceCard } from "../../Home/components/PriceCard";

export function YearlyPriceSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mx-4 lg:mx-6">
            <PriceCard plan={"basic"} price={"500"} duration={"year"} />
            <PriceCard plan={"pro"} price={"700"} duration={"year"} />
        </div>
    )
}