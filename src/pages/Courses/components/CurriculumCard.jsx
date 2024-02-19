import { Button } from "@material-tailwind/react";
import { useState } from "react";

export function CurriculumCard({ items }) {
    const [showCurriculum, setShowCurriculum] = useState(false);
    return (
        <div className="flex flex-col gap-2 pt-4 px-2 rounded-md">
            <Button onClick={() => setShowCurriculum(!showCurriculum)} className={`text-slate-100 my-2 md:hidden bg-blue-500`}>{showCurriculum ? "Hide" : "See"} Curriculum</Button>
            <div className={`${showCurriculum ? "md:flex" : "hidden"} md:flex flex-col`}>
                <h1 className="fs-200 font-semibold pb-1">Curriculum</h1>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
                    {items.curriculum.map((item, index) => (
                        <li className="flex flex-col py-3 border rounded px-4">
                            <h2 className="fs-700 font-bold ">{item.sectionId}</h2>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}