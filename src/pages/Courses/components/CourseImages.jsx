import { courses_images } from "../../../assets/courses";
export function CourseImages({ items }) {
    return (
        <div className="grid grid-cols-3 gap-2 lg:gap-4 my-4">
            <div className="overflow-hidden max-h-72 aspect-square md:aspect-auto flex justify-center">
                <img className="w-full block object-cover rounded" src={items.images?.[0]} alt="Course Images" />
            </div>
            <div className="overflow-hidden max-h-72 aspect-square md:aspect-auto flex justify-center">
                <img className="w-full block object-cover rounded" src={items.images?.[1]} alt="Course Images" />
            </div>
            <div className="overflow-hidden max-h-72 aspect-square md:aspect-auto flex justify-center">
                <img className="w-full block object-cover rounded" src={items.images?.[2]} alt="Course Images" />
            </div>
        </div>
    )
}