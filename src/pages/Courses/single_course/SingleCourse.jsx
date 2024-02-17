import img from "../../../assets/images/course-bg1.jpg"
import { useParams } from "react-router-dom";
import { courses } from "../../../data/courses";
import { CourseList } from "../components/CoursesList";
import { FaLock } from "react-icons/fa6";

export function SingleCourse() {
    const { id } = useParams();

    const course = courses.filter(c => c.id == id)
    const item = [...course];

    return (
        <main className="flex flex-col min-h-[60vh] scroll-smooth my-4 box-border">
            <div className="px-2 md:px-4 py-2 flex relative bg-gradient-to-t to-slate-500 from-slate-400 overflow-hidden rounded-t-md">
                <div className="grid place-items-start lg:grid-cols-2 py-2 items-center relative z-100">
                    <h1 className="fs-500 flex items-baseline gap-2 font-semibold line-1">{item[0].course} <FaLock className="h-5 w-5" /></h1>
                    <span className="fs-100 font-medium mt-1">{item[0].description}</span>
                </div>
            </div>
            <section className="grid lg:grid-cols-[7fr_3fr] h-full lg:h-[500px] xl:h-[700px] bg-slate-400 gap-2 px-2 md:px-4 py-3 md:py-6 rounded-b-md">
                <video className="block object-cover h-full w-full rounded-lg" controls>
                    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <ul className="h-full overflow-y-scroll no-scrollbar">
                    {item[0].curriculum.map(curr => (
                        <CourseList key={curr.sectionId} title={curr.title} sectionId={curr.sectionId} lessons={curr.lessons} />
                    ))}
                </ul>
            </section>
        </main>
    )
}