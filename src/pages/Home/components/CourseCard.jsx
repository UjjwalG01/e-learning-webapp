import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";

import { ButtonGray } from "../../../components/Button"

export function CourseCard({ alt, course, description, images, duration, level, author }) {
    return (
        <Card className="mt-3 md:mt-4 lg:mt-6 py-2 lg:py-4 min-w-80 max-w-[40rem] lg:max-w-full mx-auto rounded-md">
            <CardHeader color="blue-gray" className="relative p-2 lg:p-4 shadow-none">
                <img
                    className="rounded-md block w-full object-cover"
                    src={images?.[0]}
                    alt={alt}
                />
            </CardHeader>
            <CardBody>
                <div className="flex justify-between items-center mb-4">
                    <span className="flex gap-6 items-center">
                        <p className="fs-100">{duration}</p>
                        <p className="fs-50">{level}</p>
                    </span>
                    <span className="fs-100 font-semibold">By {author}</span>
                </div>
                <Typography color="blue-gray" className="mb-2 fs-200 font-semibold">
                    {course}
                </Typography>
                <Typography className="fs-100">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <ButtonGray className="bg-slate-200 text-black font-medium fs-50 w-full" label={"Get It Now!"} type={"button"} />
            </CardFooter>
        </Card>
    )
}