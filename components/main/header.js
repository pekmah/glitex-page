import {useEffect, useState} from "react";
import styles from './css/header.module.scss';

const Header = () => {
    const [isIndex, setIsIndex] = useState();

    useEffect(() => {
        setIsIndex(window.location.pathname === "/");
    })
    return (
        <header className="s-header">
            <div className="header-logo">
                <img style={{
                    height: "7rem",
                    marginTop: "2rem"
                }} src={"/images/logo.png"} alt="Homepage"/>
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
                    <h5 style={{color: "white"}}>Email Us At</h5>
                    <p>
                        <a href="mailto:business@glitexsolutions.co.ke" className="__cf_email__">
                            Business@glitexsolutions.co.ke
                        </a><br/>
                        <a href="mailto:info@glitexsolutions.co.ke" className="__cf_email__">
                            Info@glitexsolutions.co.ke
                        </a>
                    </p>
                    <h5 style={{color: "white"}}>Call Us On</h5>
                    <p>
                        Phone: (+254) 707021821<br/> Mobile: (+254) 703714050<br/>
                    </p>
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
                            <a href="https://www.instagram.com/glitexsolutions/">
                                <i className="fa fa-instagram"
                                   aria-hidden="true"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/glitex-solutions/">
                                <i className="fa fa-linkedin"
                                   aria-hidden="true"/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <a
                style={{
                    color: "White",
                    fontSize: "1rem",
                }}
                className="header-menu-toggle" href="#0">
                <span
                    style={{
                        left: "-290px",
                        width: "290px"
                    }}
                    className="header-menu-text"><a style={{
                    fontSize: "1rem",
                    color: "white"
                }}>
                    0707021821</a> | {" "}
                    <a style={{
                        fontSize: "1rem",
                        color: "white"
                    }} className={styles.display}>0703714050</a> |
                    Menu
                </span>
                <span className="header-menu-icon"/>
            </a>
        </header>
    )
}

export default Header;