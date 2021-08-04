import Home from "../components/pages/home/home";
import About from "../components/pages/home/about";
import Services from "../components/pages/home/services";
import Works from "../components/pages/home/works/works";
import Footer from "../components/pages/home/footer";
import Contact from "../components/pages/home/contact";
import Layout from "../components/main/layout";

export default function Index() {

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
