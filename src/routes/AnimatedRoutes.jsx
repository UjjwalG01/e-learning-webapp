import ProtectedRoute from "./ProtectedRoute"
import { Profile } from "../pages/Protected/Profile"
import { SingleCourse } from "../pages/Courses/single_course/SingleCourse"
import { About } from "../pages/About/About"
import { Courses } from "../pages/Courses/Courses"
import { Home } from "../pages/Home/Home"
import { UserIndex } from "../pages/sign-up/UserIndex"

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { Pricing } from "../pages/Pricing/Pricing"
import { Contact } from "../pages/contact/Contact"
import ErrorPage from "../pages/Error/ErrorPage"

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" index element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<SingleCourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<UserIndex />} />
                <Route path="*" element={<ErrorPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}