import { Link } from "react-router-dom";
import { goTop } from "../utils/gotoTop";

export function NavlinkItem({ label, to, className }) {
    return (
        <Link to={to} onClick={goTop} className={`flex items-center fs-100 uppercase font-medium border-b-2 px-3 py-1 rounded-md lg:focus:text-slate-400 hover:text-slate-500 border-white hover:bg-slate-100 lg:hover:bg-white transition-[border] ${className}`}>
            {label}
        </Link>
    )
}