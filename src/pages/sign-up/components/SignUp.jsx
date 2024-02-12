import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { InputSection } from "./InputSection";

import { motion } from "framer-motion";

export function SignUp({ setIsLogin }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ ease: "linear", duration: 0.4 }}
            className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-semibold">Sign Up</h2>
            <span className="text-base">Create an account to unlock exclusive features.</span>
            <form className="mt-4">
                <InputSection id={"signin-name"} label={"Full Name"} type={"text"} placeholder={"Enter your name"} />
                <InputSection id={"signin-email"} label={"Email"} type={"email"} placeholder={"Enter your email"} />
                <InputSection id={"signin-password"} label={"Password"} type={"password"} placeholder={"Enter your password"} />
                <Button type={"submit"} className={"bg-blue-600"} label={"Submit"} />
            </form>
            <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-400"></div>
                <span className="mx-4 text-black font-semibold">OR</span>
                <div className="flex-grow h-px bg-gray-400"></div>
            </div>
            <Link to={"https://www.google.com"} target="_blank" className="flex items-center justify-center gap-4 my-4 py-2 font-semibold hover:bg-slate-200 rounded-md bg-slate-100">
                <span>G</span>
                <p>Sign up with Google</p>
            </Link>
            <div className="flex items-center justify-center my-4">
                <span>Already have an account? <Link onClick={() => setIsLogin(true)}>Login</Link></span>
            </div>
        </motion.div>
    )
}