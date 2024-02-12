import { Link } from "react-router-dom";

export function FooterNav({ title, items }) {
    return (
        <div className="flex flex-col items-start">
            <p className="fs-100 font-semibold pb-1">{title}</p>
            <ul className="flex flex-col gap-1">
                {items.map((item, index) => (
                    // to be updated
                    <Link key={index} to={"#"} href={item.link} className="fs-100 font-medium">{item.name}</Link>
                ))}
            </ul>
        </div>
    )
}