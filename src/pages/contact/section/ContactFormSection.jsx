import { Button } from "@material-tailwind/react";

export function ContactFormSection() {
    return (
        <div className="grid lg:grid-cols-[2fr_3fr] my-12 gap-4">
            <div className="h-fit flex flex-col gap-3 p-3">
                <h2 className="fs-400 font-semibold">GET IN TOUCH</h2>
                <p className="fs-100 font-medium">Feel free to contact us on your queries and we will get back to you as soon as possible.</p>
                <a className="fs-100 font-semibold" href="#">See More</a>
            </div>
            <ul className="px-6 py-4 w-full">
                {/* <div className="absolute -left-[5.5rem] top-24 z-10 bg-blue-500 rounded-t-lg text-white p-2 -rotate-90">
                    <h2 className="fs-200 font-semibold px-3">Contact Info</h2>
                </div> */}
                <form className="bg-slate-300 px-4 py-8 rounded-md shadow-md">
                    <h2 className="fs-300 uppercase font-semibold my-3">Send us a message</h2>
                    <div className="flex flex-col gap-2">
                        <input className="px-2 h-11 rounded-md my-1 fs-100 outline-none " type="text" placeholder="Name" />
                        <input className="px-2 h-11 rounded-md my-1 fs-100 outline-none " type="email" placeholder="Email" />
                        <input className="px-2 h-11 rounded-md my-1 fs-100 outline-none " type="text" placeholder="Mobile" />
                    </div>
                    <div className="my-4">
                        <h3 className="fs-100 mb-1 font-semibold">Preferred mode of communication</h3>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1 fs-50 font-medium"><input className="border-none h-4 w-4 lg:h-6 lg:w-6 outline-none" type="radio" name="mode" /> Email</span>
                            <span className="flex items-center gap-1 fs-50 font-medium"><input className="border-none h-4 w-4 lg:h-6 lg:w-6 outline-none" type="radio" name="mode" /> Phone</span>
                        </div>
                    </div>
                    <textarea className="outline-none w-full p-4 rounded-md fs-100" name="message" rows="5" placeholder="Message"></textarea>
                    <Button className="w-full bg-blue-500 mt-3">send</Button>
                </form>
            </ul>
        </div>
    )
}