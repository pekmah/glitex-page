import {useEffect, useState} from "react";

const Header = () => {
    const [isIndex, setIsIndex] = useState();

    useEffect(() => {
        setIsIndex(window.location.pathname === "/");
    })
    return (
        <header className="s-header">
            <div className="header-logo">
                <img style={{
                    height: "13rem",
                    marginTop: "2rem"
                }} src="/images/logo.png" alt="Homepage"/>
            </div>
            <nav className="header-nav">
                <a href="#0" className="header-nav__close" title="close"><span>Close</span></a>
                <div className="header-nav__content">
                    <h3>Navigation</h3>
                    <ul className="header-nav__list">
                        <li className="current"><a className={isIndex ? "smoothscroll" : ""}
                                                   href={`${!isIndex ? "/" : ""}#home`}
                                                   title="home">Home</a></li>
                        <li>
                            <a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#about`}
                               title="about">About</a>
                        </li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#services`}
                               title="services">Services</a></li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#works`}
                               title="works">Works</a></li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#clients`}
                               title="clients">Clients</a></li>
                        <li><a href={`/gallery`}
                               title="clients">Gallery</a></li>
                        <li><a className={isIndex ? "smoothscroll" : ""} href={`${!isIndex ? "/" : ""}#contact`}
                               title="contact">Contact</a></li>
                    </ul>
                    <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto
                        sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
                    <ul className="header-nav__social">
                        <li>
                            <a href="https://www.facebook.com/glitexsolutions/"><i className="fa fa-facebook"
                                                                                   aria-hidden="true"/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/GlitexSolutions"><i className="fa fa-twitter"
                                                                             aria-hidden="true"/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/glitexsolutions/"><i className="fa fa-instagram"
                                                                                    aria-hidden="true"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/glitex-solutions/"><i className="fa fa-linkedin"
                                                                                       aria-hidden="true"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <a className="header-menu-toggle" href="#0">
                <span className="header-menu-text">Menu</span>
                <span className="header-menu-icon"/>
            </a>
        </header>
    )
}

export default Header;