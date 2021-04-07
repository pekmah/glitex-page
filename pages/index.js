import Head from 'next/head'
import Header from "../components/pages/home/header";
import Home from "../components/pages/home/home";
import About from "../components/pages/home/about";
import Services from "../components/pages/home/services";
import Works from "../components/pages/home/works";
import Clients from "../components/pages/home/clients";
import Footer from "../components/pages/home/footer";
import Contact from "../components/pages/home/contact";

export default function Index() {

    return (
        <div>
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Works/>
            <Clients/>
            <Contact/>
            <Footer/>
        </div>
    )
}
