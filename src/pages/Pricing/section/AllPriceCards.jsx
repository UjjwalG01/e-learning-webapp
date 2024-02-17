
import { useState } from "react";
import { MonthlyPriceSection } from "../section/MonthlyPriceSection";
import { YearlyPriceSection } from "../section/YearlyPriceSection";

const activeTab = " text-white bg-blue-500 transition-all duration-300 rounded"

export function AllPriceCards() {
    const [active, setActive] = useState("monthly");
    return (
        <section className="flex flex-col items-center">
            <div className="flex gap-4 items-center bg-white box-border w-fit p-2 rounded my-8">
                <span onClick={() => setActive("monthly")} className={`fs-50 p-3 px-6 font-medium cursor-pointer ${active === "monthly" ? activeTab : ""}`}>Monthly</span>
                <span onClick={() => setActive("yearly")} className={`fs-50 p-3 px-6 font-medium cursor-pointer ${active === "yearly" ? activeTab : ""}`}>Yearly</span>
            </div>
            {
                active === "yearly" ? (
                    <YearlyPriceSection />
                ) : (
                    <MonthlyPriceSection />
                )
            }
        </section>
    )
}