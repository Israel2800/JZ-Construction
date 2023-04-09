import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainNavbar from './pages/Navbar';
import Home from "./pages/Home";
// import Services from "./pages/Services";
import About from "./pages/About";
// import Testimonials from "./pages/Testimonials";
// import Quote from "./pages/Quote";
import Quote from './pages/Quote';
// import Gallery from "./pages/Gallery";
// import More from "./pages/More";
import Footer from "./pages/Footer";
import '../App'

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    }
    if (currentPage ==='Services') {
        return <Home />;
    }
    if (currentPage === 'About') {
        return <Home />;
    }
    if (currentPage === 'Testimonials') {
        return <Home />;
    }
    if (currentPage === 'Quote') {
        return <Quote />;
    }
    if (currentPage === 'Gallery') {
        return <Home />
    }
    if (currentPage === 'More') {
        return <More />
    }

    };


    const handlePageChange = (page) => setCurrentPage(page);
    return (

    <main className=" ">
        <Router>
        
                {/* We are passing the currentPage from state and the function to update it */}
                <MainNavbar currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* <About currentPage={currentPage} handlePageChange={handlePageChange} /> */}

                {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
                
                <Footer />
        </Router>
    </main>

    );
}