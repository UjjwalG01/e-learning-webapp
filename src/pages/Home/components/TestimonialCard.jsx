import { Card } from "@material-tailwind/react";
import { ButtonSm } from "../../../components/Button";

export function TestimonialCard({ review, image, author, link, className }) {
    return (
        <Card className={`flex bg-white flex-col justify-center max-w-[50rem] rounded-md p-4 my-2 lg:py-8 lg:px-6 gap-3 min-h-[270px] ${className}`}>
            <p className="fs-100 font-medium text-left">{review}</p>
            <div className="flex justify-between items-center my-2">
                <span className="flex items-center gap-2">
                    <img className="block max-w-16 rounded object-cover aspect-square" src={image} alt="Testimonial Image" />
                    <span className="font-medium fs-100">{author}</span>
                </span>
                <ButtonSm label={"Read Story"} className="bg-slate-200 text-black px-3 md:p-3 flex-shrink-0 fs-50 font-medium rounded"></ButtonSm>
            </div>
        </Card>
    )
}