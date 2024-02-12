import { List, ListItem, Card, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

export function CourseList({ title, sectionId, lessons }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleShow = () => {
        setIsOpen(!isOpen);
    }
    const [lesson, setLesson] = useState("");
    const handleLessonClick = (e) => {
        if (e.target.classList.contains("inactive")) {
            setLesson("")
        }
        setLesson(e.target.innerText);
        e.stopPropagation();
    }

    return (
        <Card
            className="w-full px-4 py-2 rounded-md bg-white text-black cursor-pointer border-x mt-4 lg:mt-0 mb-2 min-h-20 overflow-hidden">
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? "auto" : 1 }}
                transition={{ duration: 0.4, ease: "linear" }}
                exit={{ height: 0 }}
            >
                <div onClick={handleShow} className="flex justify-between py-1 items-center px-1 lg:px-2 font-semibold">
                    <h2 className="fs-100 h-fit font-medium">{sectionId}. {title}</h2>
                    <span className="text-base">
                        {isOpen ? (
                            <FaChevronUp />
                        ) : (
                            <FaChevronDown />
                        )}
                    </span>
                </div>
                {lessons.map((item) => (
                    <List onClick={handleLessonClick} key={item.topic} className={`transition-transform duration-200 ${isOpen ? "block" : "hidden"}`}>
                        <ListItem className={`flex items-center gap-2 justify-between border-2 bg-slate-200 -my-0.5 border-white rounded-md ${lesson == item.topic ? "border-2 border-blue-400" : "inactive"}`}>
                            <span className="fs-50 whitespace-nowrap flex-1 font-normal truncate">
                                {item.topic}
                            </span>
                            <span className={`flex items-center justify-end font-medium overflow-ellipsis text-sm whitespace-nowrap gap-1.5 rounded px-1 ${lesson == item.topic ? "bg-blue-200" : "inactive"}`}><FiClock className="text-sm" />{item.duration}</span>
                        </ListItem>
                    </List>
                ))}
            </motion.div>
        </Card>
    )
}
