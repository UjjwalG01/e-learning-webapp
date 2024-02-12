import { MdArrowOutward } from "react-icons/md";

export function BenefitCard({ index, title, description, link }) {
    return (
        <li className="bg-white py-8 lg:p-8 px-6 min-h-[20rem] md:min-h-[22rem] lg:min-h-[27rem] xl:min-h-[25rem] max-w-[28rem]">
            <h1 className="fs-800 font-bold text-right">{index}</h1>
            <p className="fs-200 font-semibold pt-3 lg:pt-6 pb-1 lg:pb-3">{title}</p>
            <span className="fs-100">{description}</span>
            <div className="my-6 flex items-center fs-300 justify-end">
                <a className="border p-4 rounded" href={link}><MdArrowOutward /></a>
            </div>
        </li>
    )
}