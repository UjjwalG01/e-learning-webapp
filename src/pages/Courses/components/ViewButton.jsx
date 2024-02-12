import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { goTop } from "../../../utils/gotoTop"


export function ViewButton({ goTo, label, className }) {
    return (
        <Link to={goTo} onClick={goTop} className="flex-shrink-0">
            <motion.button
                whileTap={{ scale: 1.2 }}
                className={`flex items-center fs-100 font-semibold border bg-gray-200 px-4 py-2.5 lg:ml-4 rounded ${className}`}>{label}</motion.button>
        </Link>)

}