import React from 'react';
import Layout from "../../components/main/layout";
import Home from "../../components/pages/home/home";
import About from "../../components/pages/home/about";
import Services from "../../components/pages/home/services";
import Works from "../../components/pages/home/works/works";
import Contact from "../../components/pages/home/contact";
import Footer from "../../components/pages/home/footer";

function SoftwareDevCompany(props) {
    return (
        <Layout>
            <Home/>
            <About/>
            <Services/>
            <Works/>
            {/*<Clients/>*/}
            <Contact/>
            <Footer/>
        </Layout>
    )
}

export default SoftwareDevCompany;