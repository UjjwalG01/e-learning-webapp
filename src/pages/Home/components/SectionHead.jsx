import { Link } from "react-router-dom";
import { ViewBtn } from "../../common/ViewBtn";
import { goTop } from "../../../utils/gotoTop";

export function SectionHead({ label, description, btnLabel, link }) {
    return <>
        <h1 className="fs-400 font-bold text-center lg:text-left">{label}</h1>
        <div className="lg:flex justify-between items-baseline text-center lg:text-left">
            <p className="fs-100">{description}</p>
            <Link to={link} onClick={goTop} className="whitespace-nowrap">
                <ViewBtn label={btnLabel} />
            </Link>
        </div>
    </>
}