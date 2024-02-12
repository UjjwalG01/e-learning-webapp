import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function FAQsCard({ question, answer, linkTo, link }) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <motion.li
            initial={{ height: 0 }}
            animate={{ height: showAnswer ? "auto" : 1 }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ height: 0 }}
            className="flex flex-col bg-white border border-slate-400 shadow rounded min-h-[5rem] transition-transform overflow-hidden p-4 my-4">
            <div onClick={() => setShowAnswer(!showAnswer)} className="flex justify-between items-start py-1 cursor-pointer">
                <span className="fs-100">{question}</span>
                <span className="bg-yellow-50 p-2 rounded font-semibold"><RxCross2 className={`${showAnswer === true ? "" : "rotate-45"} `} /></span>
            </div>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`my-4 ${showAnswer ? undefined : "hidden"}`}>
                <span className="fs-100 font-medium">{answer}</span>
                <Link to={link} className="flex justify-between items-center bg-slate-100 hover:bg-slate-100 duration-200 px-2 py-3 mt-3 rounded-md">
                    <span className="fs-50 font-medium">{linkTo}</span>
                    <span><FiArrowRight /></span>
                </Link>
            </div>
        </motion.li>
    )
}