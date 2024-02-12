import { courses } from "../../../data/courses"

export function CourseInfo({ items }) {
    // courses.map(course => (
    return <div className="flex justify-between border-b border-gray-200 pb-1 items-center my-4">
        <p className="flex gap-3 items-center fs-100 font-medium">
            <span>{items.duration}</span>
            <span>{items.level}</span>
        </p>
        <span className="fs-100 font-semibold">{items.author}</span>
    </div>
    // ))
}