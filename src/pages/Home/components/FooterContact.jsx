import { Link } from "react-router-dom";

export function FooterContact({ children, info, link }) {
    return (
        <Link to={link} className="flex items-center gap-3 fs-100 font-medium">
            <span>{children}</span>
            <span>{info}</span>
        </Link>
    )
}