import { FAQs } from "../../../data/FAQs";
import { FAQsCard } from "../components/FAQsCard";


export function FAQsSection() {
    return (
        <section className="my-8 lg:my-10 px-4 lg:px-10 max-w-[45rem] lg:max-w-[85rem] mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-4">
                <div className="h-fit flex flex-col gap-3 p-3">
                    <h2 className="fs-400 font-semibold">Frequently Asked Questions</h2>
                    <p className="fs-100 font-medium">Still you have any questions? Contact our Team via support@skillbridge.com</p>
                    <a className="fs-100 font-semibold" href="#">See All FAQs</a>
                </div>
                <ul className="p-4 w-full">
                    {FAQs.map(FAQ => (
                        <FAQsCard key={FAQ.question} question={FAQ.question} answer={FAQ.answer} linkTo={FAQ.linkTo} link={FAQ.link} />
                    ))}
                </ul>
            </div>
        </section>
    )
}