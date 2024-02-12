import { Adobe, Amazon, Netflix, Spotify, Udemy, Zapier, Zoom } from "../../../assets/svgs/index";

export function BrandSection() {
    return (
        <section className="w-full">
            <ul className="bg-white mx-4 p-8 flex items-center justify-around gap-4 flex-wrap">
                <li className="w-28">
                    <Zapier />
                </li>
                <li className="w-28">
                    <Spotify />
                </li>
                <li className="w-28">
                    <Zoom />
                </li>
                <li className="w-24">
                    <Amazon />
                </li>
                <li className="w-28">
                    <Adobe />
                </li>
                <li className="w-28">
                    <Udemy />
                </li>
                <li className="w-28">
                    <Netflix />
                </li>
            </ul>
        </section>
    )
}