import { MdFacebook, MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterContact } from "../pages/Home/components/FooterContact";
import logo from "../assets/brands/logo.png"
import { Link } from "react-router-dom";
import { FooterNav } from "./components/FooterNav";

export function Footer() {
    const homeNavs = [
        { name: "Benefits", link: "/#benefits" },
        { name: "Our Courses", link: "/courses" },
        { name: "Our Testimonials", link: "/#testimonials" },
        { name: "Our FAQ", link: "#faqs" },
    ]
    const aboutNavs = [
        { name: "Company", link: "/" },
        { name: "Achievement", link: "/" },
        { name: "Our Goals", link: "/" },
    ]
    return (
        <footer className="w-full min-h-[30vh] bg-gradient-to-l from-slate-200 to-slate-400 py-8">
            <div className="grid lg:grid-cols-2 gap-4 items-center max-w-screen-2xl text-gray-800 mx-auto px-4 py-6 lg:px-8">
                <div className="flex flex-col items-center lg:items-start">
                    <span className="w-44">
                        <img src={logo} className="block object-cover" alt="Site Logo" />
                    </span>
                    <ul className="flex flex-col gap-2">
                        <FooterContact children={<MdMail />} info={"siksha@learningschool.com"} />
                        <FooterContact children={<MdPhone />} info={"(+977) 9813 23 2309"} />
                        <FooterContact children={<MdLocationOn />} info={"Somewhere in the World"} />
                    </ul>
                </div>
                <div className="grid xs:grid-cols-2 sm:grid-cols-3 justify-center items-start gap-3 text-center sm:text-left">
                    <FooterNav title={"Home"} items={homeNavs} />
                    <FooterNav title={"About Us"} items={aboutNavs} />
                    <div className="flex flex-col items-start">
                        <p className="fs-200 font-semibold pb-1">Social Profiles</p>
                        <ul className="flex gap-4 fs-400 mt-2">
                            <Link to={"#"}><MdFacebook /></Link>
                            <Link to={"#"}><FaTwitter /></Link>
                            <Link to={"#"}><FaLinkedin /></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}