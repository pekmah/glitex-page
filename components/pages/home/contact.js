const Contact = () => {
    return (
        <section id="contact" className="s-contact">
            <div className="overlay"/>
            <div className="contact__line"/>
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Contact Us</h3>
                    <h1 className="display-2 display-2--light">Reach out for a new project or just say hello</h1>
                </div>
            </div>
            <div className="row contact-content" data-aos="fade-up">
                <div className="contact-primary">
                    <h3 className="h6">Send Us A Message</h3>
                    <form name="contactForm" id="contactForm" method="post" action="" noValidate="novalidate">
                        <fieldset>
                            <div className="form-field">
                                <input name="contactName" type="text" id="contactName" placeholder="Your Name" value=""
                                       minLength="2" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email"
                                       value="" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"
                                       value="" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10"
                                          cols="50" required="" aria-required="true" className="full-width"/>
                            </div>
                            <div className="form-field">
                                <button style={{color: "black"}} className="full-width btn--primary">Submit</button>
                                <div className="submit-loader">
                                    <div className="text-loader">Sending...</div>
                                    <div className="s-loader">
                                        <div className="bounce1"/>
                                        <div className="bounce2"/>
                                        <div className="bounce3"/>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    <div className="message-warning">
                        Something went wrong. Please try again.
                    </div>

                    <div className="message-success">
                        Your message was sent, thank you!<br/>
                    </div>
                </div>
                <div className="contact-secondary">
                    <div className="contact-info">
                        <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
                        <div className="cinfo">
                            <h5>Where to Find Us</h5>
                            <p>
                                Thika Road <br/> Mountain Mall<br/>
                            </p>
                        </div>
                        <div className="cinfo">
                            <h5>Email Us At</h5>
                            <p>
                                <a href="mailto:business@glitexsolutions.co.ke" className="__cf_email__">
                                    business@glitexsolutions.co.ke
                                </a><br/>
                                <a href="mailto:info@glitexsolutions.co.ke" className="__cf_email__">
                                    info@glitexsolutions.co.ke
                                </a>
                            </p>
                        </div>
                        <div className="cinfo">
                            <h5>Call Us At</h5>
                            <p>
                                Phone: (+254) 703714050<br/> Mobile: (+254) 707021821<br/>
                            </p>
                        </div>
                        <ul className="contact-social">
                            <li>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-behance" aria-hidden="true"/></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;