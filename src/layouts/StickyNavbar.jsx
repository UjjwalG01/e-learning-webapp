
import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    IconButton,
} from "@material-tailwind/react";
import { Close, Hamburger } from "../assets/svgs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button"
import { NavlinkItem } from "../components/NavlinkItem";
import logo from "../assets/brands/logo.png"

export function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
            <NavlinkItem label={"Home"} to={"/"} />
            <NavlinkItem label={"Courses"} to={"/courses"} />
            <NavlinkItem label={"About"} to={"/about"} />
            <NavlinkItem label={"Contact"} to={"/contact"} />
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full overflow-y-clip text-black px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900 max-w-screen-2xl mx-auto">
                <Link to={"/"} className="mr-4 cursor-pointer text-logo font-semibold">
                    <img src={logo} className="w-32 block object-cover" alt="" />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="items-center gap-x-1 hidden lg:flex">
                        <Button label={"Sign Up"} className="hidden lg:inline-block bg-gray-400 hover:bg-blue-600" type="button" onClick={() => navigate("/signup")} />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit flex items-center hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <Close />
                        ) : (
                            <Hamburger />
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    {/* <Button label={"Log In"} className="bg-gray-400" type="button" onClick={() => navigate("/login")} /> */}
                    <Button label={"Sign Up"} className="bg-gray-400" type="button" onClick={() => navigate("/signup")} />
                </div>
            </Collapse>
        </Navbar>
    );
}

