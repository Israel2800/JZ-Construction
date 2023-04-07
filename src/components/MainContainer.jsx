import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from "./pages/Home";
// import Services from "./pages/Services";
import About from "./pages/About";
// import Testimonials from "./pages/Testimonials";
// import Quote from "./pages/Quote";
// import Gallery from "./pages/Gallery";
// import More from "./pages/More";
import Footer from "./pages/Footer";
import '../App'

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    }
    if (currentPage ==='Services') {
        return <Services />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Testimonials') {
        return <Testimonials />;
    }
    if (currentPage === 'Quote') {
        return <Quote />;
    }
    if (currentPage === 'Gallery') {
        return <Gallery />
    }
    if (currentPage === 'More') {
        return <More />
    }

    };


    const handlePageChange = (page) => setCurrentPage(page);
    return (

    <main className="text-indigo-100 bg-zinc-800 w-full">
        <Router>
            <div>
                {/* We are passing the currentPage from state and the function to update it */}
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* <About currentPage={currentPage} handlePageChange={handlePageChange} /> */}

                {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
                
                {/* <Footer /> */}
            </div>
        </Router>
    </main>

    );
}