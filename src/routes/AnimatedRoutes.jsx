import ProtectedRoute from "./ProtectedRoute"
import { Profile } from "../pages/Protected/Profile"
import { SingleCourse } from "../pages/Courses/single_course/SingleCourse"
import { About } from "../pages/About/About"
import { Courses } from "../pages/Courses/Courses"
import { Home } from "../pages/Home/Home"
import { UserIndex } from "../pages/sign-up/UserIndex"

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="courses" element={<Courses />} />
                <Route path="course/:id" element={<SingleCourse />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<UserIndex />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}