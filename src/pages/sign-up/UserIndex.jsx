import { ExampleWrapper } from "../../components/ExampleWrapper";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserIndex() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="min-h-[80vh] my-6 grid lg:grid-cols-2 bg-gray-100 rounded-md items-center">
            <div>
                <ExampleWrapper />
            </div>
            <div className="flex items-center justify-center">
                {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
            </div>
        </div>


    )
}