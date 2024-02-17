import { Card } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";

export function ContactCard({ icon, title, description, link, label }) {
    return (
        <Card className="gap-4 items-center relative mt-6 lg:mt-14 p-4 py-8 min-w-64 max-w-[30rem] lg:max-w-[24rem] mx-auto rounded-lg">
            <span className="p-10 -mt-14 sticky text-3xl text-purple-50 bg-blue-400 border border-purple-200 shadow-md rounded-full">
                {icon}
            </span>
            <h2 className="fs-300 font-semibold">{title}</h2>
            <p className="fs-100 font-normal text-center">{description}</p>
            <a className="fs-100 no-underline font-medium flex items-center gap-2 text-blue-500" href={link}>{label}<FaLongArrowAltRight /></a>
        </Card>
    )
}