import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { twMerge } from "tw-merge"

export function Button({ goTo, type, className, label, onClick }) {
    return (
        <Link to={goTo}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={onClick}
                type={type}
                className={twMerge("w-full font-medium fs-50 bg-blue-600 text-white uppercase py-3 px-4 rounded-md", className)}
            >
                {label}
            </motion.button>
        </Link>
    )
}

export function ButtonSm({ goTo, type, className, label, onClick }) {
    return (
        <Link to={goTo}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={onClick}
                type={type}
                className={twMerge("font-medium fs-50 bg-blue-600 text-white uppercase p-3 rounded-md", className)}
            >
                {label}
            </motion.button>
        </Link>
    )
}

export function ButtonGray({ goTo, type, className, label, onClick }) {
    return (
        <Link to={goTo}>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={onClick}
                type={type}
                className={twMerge("font-medium fs-50 bg-gray-500 text-white p-4 uppercase rounded-md", className)}
            >
                {label}
            </motion.button>
        </Link>
    )
}