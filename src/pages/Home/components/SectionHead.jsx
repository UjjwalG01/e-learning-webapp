import { ViewBtn } from "../../common/ViewBtn";

export function SectionHead({ label, description, btnLabel }) {
    return <>
        <h1 className="fs-400 font-semibold text-center lg:text-left">{label}</h1>
        <div className="lg:flex justify-between items-baseline text-center lg:text-left">
            <p className="fs-100">{description}</p>
            <ViewBtn label={btnLabel} />
        </div>
    </>
}