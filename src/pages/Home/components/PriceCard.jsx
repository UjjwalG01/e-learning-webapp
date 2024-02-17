import { Card, Button } from "@material-tailwind/react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Features } from "./Features"
import { features } from "../../../data/priceFeatures"

export function PriceCard({ plan, price, duration }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true })

    if (inView) {
        controls.start({ opacity: 1, translateY: 0 })
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, translateY: 200 }}
            animate={controls}
            exit={{ opacity: 1 }}
            className="bg-white flex shadow-lg min-w-[330px] max-w-[35rem] mx-auto justify-center rounded-lg px-4 pt-4 my-10">
            <div className="flex flex-col mx-auto items-center justify-between gap-4 p-7 lg:p-12">
                <span className="w-full text-center py-2 border border-gray-200 rounded bg-blue-50 capitalize fs-100 font-semibold">{plan} Plan</span>
                <div className="flex gap-2 items-baseline justify-center my-6">
                    <span className="fs-800 font-semibold">${price}</span>
                    <span className="fs-200 font-medium">/ {duration}</span>
                </div>
                <span className="fs-200 font-semibold mb-4">Available Features</span>
                <ul className="list-none">
                    {features.filter(item => item.plan === plan).map(feature => (
                        <Features isAvailable={feature.isAvailable} feature={feature.title} />
                    ))}
                </ul>
                <Button className={`${plan === "free" ? "bg-blue-400" : "bg-slate-400"} fs-100 w-full text-balance my-2`}>Get Started {plan}</Button>
            </div>
        </motion.div>
    )
}