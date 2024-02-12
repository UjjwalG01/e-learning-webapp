import { CourseHeader } from "../components/CourseHeader";
import { CourseImages } from "../components/CourseImages";
import { CourseInfo } from "../components/CourseInfo";
import { CurriculumCard } from "../components/CurriculumCard";

export function CourseSection({ items }) {
    return (
        <section className="mt-8 lg:mt-10 px-4 lg:px-10 bg-white py-10 rounded-lg shadow lg:m-6 lg:mx-20">
            <CourseHeader items={items} />
            <CourseImages items={items} />
            <CourseInfo items={items} />
            <CurriculumCard items={items} />
        </section>
    )
}