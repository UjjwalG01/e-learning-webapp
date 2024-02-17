import { PriceCard } from "../../Home/components/PriceCard";

export function MonthlyPriceSection() {
    return (
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mx-4 lg:mx-6">
            <PriceCard plan={"free"} price={"0"} duration={"month"} />
            <PriceCard plan={"pro"} price={"79"} duration={"month"} />
        </div>
    )
}