import { Button } from "../../../components/Button";

export function AboutFooterSection() {
    return (
        <section className="bg-white my-8 lg:my-10 p-4 lg:p-10">
            <div className="grid sm:grid-cols-[3fr_1fr]">
                <div className="flex flex-col sm:mr-8">
                    <h2 className="fs-600 font-semibold line-3"><span className="text-blue-600">Together</span>, let's shape the future of digital innovation</h2>
                    <p className="fs-200 font-medium my-4">Join us on this exciting learning journey and unlock your potential in design and development.</p>
                </div>
                <Button label={"Join Now"} />
            </div>
        </section>
    )
}