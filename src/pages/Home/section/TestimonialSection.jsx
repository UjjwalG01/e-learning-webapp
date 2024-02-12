import { testimonials } from "../../../data/testimonials";
import { SectionHead } from "../components/SectionHead";
import { TestimonialCard } from "../components/TestimonialCard";

export function TestimonialSection() {
    return (
        <section id="testimonials" className="my-8 lg:my-10 px-4 lg:px-10">
            <SectionHead label={"Our Testimonial"} btnLabel={"View All"} description={"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."} />
            <ul className="grid md:grid-cols-2 gap-y-3 lg:gap-y-6 gap-x-4 place-items-center mt-10">
                {testimonials.map(item => (
                    <TestimonialCard review={item.review} author={item.author} image={item.image} link={item.link} />
                ))}
            </ul>
        </section>
    )
}