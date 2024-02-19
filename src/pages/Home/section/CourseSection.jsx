import { courses } from "../../../data/courses";
import { CourseCard } from "../components/CourseCard";
import { SectionHead } from "../components/SectionHead";

export function CourseSection() {
    return (
        <section className="my-8 lg:my-10 px-4 lg:px-10">
            <SectionHead label={"Our Courses"} link={"/courses"} btnLabel={"View All"} description={"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."} />
            <ul className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 ">
                {courses.map((course, index) => {
                    if (index >= 6) return;
                    return <CourseCard
                        id={course.id}
                        key={course.course}
                        images={course.images}
                        level={course.level}
                        duration={course.duration}
                        author={course.author}
                        course={course.course}
                        description={course.description}
                    />
                })}
            </ul>
        </section>
    )
}