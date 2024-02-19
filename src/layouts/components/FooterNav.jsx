import { Link } from "react-router-dom";

export function FooterNav({ title, items, className }) {
    return (
        <div className={`flex-col place-items-center  ${className}`}>
            <span className="fs-100 font-semibold pb-1">{title}</span>
            <ul className="flex flex-col gap-1">
                {items.map((item, index) => (
                    // to be updated
                    <Link key={index} to={item.link} className="fs-100 font-medium">{item.name}</Link>
                ))}
            </ul>
        </div>
    )
}