import { ContactCard } from "../ContactCard";
import { ImFire, ImOffice, ImSoundcloud2 } from "react-icons/im";

export function ContactSection() {
    return (
        <section className="grid lg:grid-cols-3 mx-auto place-items-center gap-4 my-12">
            <ContactCard icon={<ImFire />} title={"Trending Courses"} label={"Explore courses"} description={"Get the most trending topics and enroll with the heavy discount."} link={"#"} />
            <ContactCard icon={<ImOffice />} title={"Connect Physically"} label={"Connect with us"} description={"Get the most trending topics and enroll with the heavy discount."} link={"#"} />
            <ContactCard icon={<ImSoundcloud2 />} title={"Request Resources"} label={"View resources"} description={"Get the most trending topics and enroll with the heavy discount."} link={"#"} />
        </section>
    )
}