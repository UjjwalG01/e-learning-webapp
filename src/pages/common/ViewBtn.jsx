import { FiArrowRight } from "react-icons/fi";

export function ViewBtn({ label }) {
    return <button className="flex items-center fs-100 gap-2 flex-shrink-0 bg-white px-4 py-3 mx-auto lg:mx-4 lg:ml-8  rounded">{label} <FiArrowRight /></button>
}