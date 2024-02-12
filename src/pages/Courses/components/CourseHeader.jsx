import { ViewButton } from "./ViewButton";

export function CourseHeader({ items }) {
    const route = items.course.split(" ").join("-").toLowerCase();
    return (
        <div className="flex flex-col">
            <h2 className="fs-200 font-semibold">{items.course}</h2>
            <div className="lg:flex justify-between items-baseline">
                <p className="fs-100 font-normal mt-2">{items.description}</p>
                <ViewButton goTo={`/course/${items.id}`} className={"my-4 lg:my-auto"} label={"View Course"} />
            </div>
        </div>
    )
}