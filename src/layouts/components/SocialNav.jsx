import { MdFacebook } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export function SocialNav({ title, className }) {
    return (
        <div className={`flex-col items-start ${className}`}>
            <p className="fs-100 font-semibold pb-1">{title}</p>
            <ul className="flex gap-4 fs-400 mt-2">
                <Link to={"#"}><MdFacebook /></Link>
                <Link to={"#"}><FaTwitter /></Link>
                <Link to={"#"}><FaLinkedin /></Link>
            </ul>
        </div>
    )
}