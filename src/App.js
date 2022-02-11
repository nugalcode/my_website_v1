import './css/App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects"
import { AnimatePresence } from "framer-motion";
import FixedHeader from "./components/FixedHeader"
import FixedHeaderLinksTop from "./components/FixedHeaderLinksTop"

function App() {
    const location = useLocation();

    return (
        <div className="body2">
            <div id="topbuffer"/> 
            <FixedHeaderLinksTop />
            
            <main>
                <AnimatePresence exitBeforeEnter={true} initial={false}>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/hobbies' element={<Hobbies />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <div id="bottombuffer" />     
        </div>   
    );
}

export default App;