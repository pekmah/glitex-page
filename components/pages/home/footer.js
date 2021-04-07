const Footer = () => {
    return (
        <footer>
            <div className="row footer-main">
                <div className="col-twelve tab-full left footer-desc">
                    <div style={{height: "13rem"}} className="footer-logo"/>
                    Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent
                    sapien
                    massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
                    nibh
                    pulvinar a. Nulla porttitor accumsan tincidunt.
                    Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Glitex Solutions {new Date().getFullYear()}</span>
                    </div>
                    <div className="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <i className="icon-arrow-up"
                               aria-hidden="true"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;