import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { TestimonialCard } from "../Home/components/TestimonialCard";
import { testimonials } from "../../data/testimonials";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Card } from "@material-tailwind/react";
import { ButtonSm } from "../../components/Button";


export function UserIndex() {
    const [isLogin, setIsLogin] = useState(true);
    const containerRef = useRef();
    const scrollAmount = 200;

    const scrollLeft = () => {
        containerRef.current.style.scrollBehavior = 'smooth';
        containerRef.current.scrollLeft -= scrollAmount;
    }

    const scrollRight = () => {
        containerRef.current.style.scrollBehavior = 'smooth';
        containerRef.current.scrollLeft += scrollAmount;
    }

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ x: "-100%", transition: { duration: 0.1 } }}
            className="min-h-[70vh] my-6 grid lg:grid-cols-2 gap-4 bg-gray-100 rounded-md overflow-hidden items-center">
            <div className="mx-auto p-4 order-2 lg:order-2">
                <h2 className="fs-300 font-semibold mb-2">Students Testimonials</h2>
                <p className="fs-50 font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consectetur deserunt suscipit quod.</p>
                <Card className={`flex bg-white flex-col justify-center max-w-[50rem] rounded-md p-4 my-4 lg:py-8 lg:px-6 gap-3 min-h-[270px]`}>
                    <p className="fs-50 font-normal text-left">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                    <div className="flex justify-between items-center my-2">
                        <span className="flex items-center gap-2">
                            <img className="block max-w-16 rounded object-cover aspect-square" src={"https://th.bing.com/th/id/OIP.0OWUtZTmRj7amsPiNMieBgHaHa?pid=ImgDet&w=474&h=474&rs=1"} alt="Testimonial Image" />
                            <span className="font-medium fs-100">Sarah L</span>
                        </span>
                        <ButtonSm label={"Read Story"} className="bg-slate-200 text-black px-3 md:p-3 flex-shrink-0 fs-50 font-medium rounded"></ButtonSm>
                    </div>
                </Card>
                <div className="flex gap-2 justify-end pt-4 px-4">
                    <button onClick={scrollLeft} className="p-2 bg-slate-200 rounded"><FaChevronLeft /></button>
                    <button onClick={scrollRight} className="p-2 bg-slate-200 rounded"><FaChevronRight /></button>
                </div>
            </div>
            <div className="flex items-center order-1 lg:order-2 justify-center flex-1">
                {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
            </div>
        </motion.div>


        // <div className="bg-slate-200 max-w-[48rem] mx-auto p-8 flex-1">
        //                 <h2 className="fs-300 font-semibold mb-2">Students Testimonials</h2>
        //                 <p className="fs-50 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur consequatur minima eos repellat in?</p>
        //                 <ul ref={containerRef} className="flex gap-y-3 gap-x-4 transition-all duration-200 ease-in-out overflow-x-scroll no-scrollbar  mt-10">
        //                     {testimonials.map(item => (
        //                         <TestimonialCard className={"min-w-[30rem]"} review={item.review} author={item.author} image={item.image} link={item.link} />
        //                     ))}
        //                 </ul>
        //                 <div className="flex gap-2 justify-start pt-4 px-4">
        //                     <button onClick={scrollLeft} className="p-2 bg-slate-200 rounded"><FaChevronLeft /></button>
        //                     <button onClick={scrollRight} className="p-2 bg-slate-200 rounded"><FaChevronRight /></button>
        //                 </div>
        //             </div>

    )
}