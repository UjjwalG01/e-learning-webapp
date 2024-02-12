import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { InputSection } from "../components/InputSection";

import { motion } from "framer-motion";

export function Login({ setIsLogin }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-semibold">Log In</h2>
            <span className="text-base">Explore all the available features.</span>
            <form className="mt-4">
                <InputSection id={"login-name"} label={"Full Name"} type={"text"} placeholder={"Enter your name"} />
                <InputSection id={"login-email"} label={"Email"} type={"email"} placeholder={"Enter your email"} />
                <InputSection id={"login-password"} label={"Password"} type={"password"} placeholder={"Enter your password"} />
                <Button type={"submit"} className={"bg-blue-600"} label={"Submit"} />
            </form>
            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-400"></div>
                <span className="mx-4 text-black font-semibold">OR</span>
                <div className="flex-grow h-px bg-gray-400"></div>
            </div>
            <div className="flex items-center justify-center my-4">
                <span>Dont't have an account? <Link onClick={() => setIsLogin(false)}>Signup</Link></span>
            </div>
        </motion.div>
    )
}