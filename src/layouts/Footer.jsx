import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { FooterContact } from "../pages/Home/components/FooterContact";
import logo from "../assets/brands/logo.png"
import { FooterNav } from "./components/FooterNav";
import { SocialNav } from "./components/SocialNav";
import { Link } from "react-router-dom";

export function Footer() {
    const homeNavs = [
        { name: "Benefits", link: "#benefits" },
        { name: "Our Courses", link: "/courses" },
        { name: "Our Testimonials", link: "#testimonials" },
        { name: "Our FAQ", link: "#faqs" },
    ]
    const aboutNavs = [
        { name: "Company", link: "/" },
        { name: "Achievement", link: "/" },
        { name: "Our Goals", link: "/" },
        { name: "Figma File", link: "https://www.figma.com/file/jl8UhLogS6DZXeciObWhdn/Online-Course-E-Learning-Educational-Website-UI-Template-Design-in-Light-Theme-(-FREE-Editable-)-(Community)?type=design&node-id=20%3A2&mode=dev&t=8uoiYrmkfuvR8Mcp-1" },
    ]
    return (
        <footer className="w-full min-h-[30vh] bg-gradient-to-l from-slate-200 to-slate-400 py-8">
            <div className="grid xs:grid-cols-2 gap-6 lg:items-start place-items-center lg:place-items-start max-w-screen-2xl text-gray-800 mx-auto px-4 py-6 lg:px-8">
                <div className="flex flex-col">
                    <Link to={"/"} className="w-44">
                        <img src={logo} className="block object-cover" alt="Site Logo" />
                    </Link>
                    <ul className="flex flex-col gap-2">
                        <FooterContact link={"mailto:siksha@learningschool.com"} children={<MdMail />} info={"siksha@learningschool.com"} />
                        <FooterContact link={"tel:+977 9813 23 2309"} children={<MdPhone />} info={"(+977) 9813 23 2309"} />
                        <FooterContact link={"https://maps.app.goo.gl/rqVfUtWvGfJaai977"} children={<MdLocationOn />} info={"Somewhere in the World"} />
                    </ul>
                </div>
                <SocialNav className={`flex items-center lg:hidden`} title={"Social Profiles"} />
                <div className="grid lg:grid-cols-3 w-full gap-3">
                    <FooterNav title={"Home"} className={"flex text-center lg:text-start lg:items-start"} items={homeNavs} />
                    <FooterNav title={"About Us"} className={"hidden lg:flex lg:text-start lg:items-start"} items={aboutNavs} />
                    <SocialNav className={`hidden lg:flex `} title={"Social Profiles"} />
                </div>
                <FooterNav title={"About Us"} className={"flex text-center lg:hidden w-full"} items={aboutNavs} />
            </div>
        </footer>
    )
}