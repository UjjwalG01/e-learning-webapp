import { StickyNavbar } from "./layouts/StickyNavbar"
import { Footer } from "./layouts/Footer"
import { AnimatedRoutes } from "./routes/AnimatedRoutes"

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <StickyNavbar />
      <div className="m-0 max-w-screen-2xl overflow-hidden relative bg-slate-100 mx-auto">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  )
}

export default App
