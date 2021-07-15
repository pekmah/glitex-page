import {services} from "../../../providers/services/data";
import {getServiceSlug} from "../../../helpers/helpers";

const Services = () => {
    return (
        <section id='services' className="s-services">
            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">What We Do</h3>
                    <h1 className="display-2">We’ve got the tools and workforce you can rely on
                        to push your business to the next level
                    </h1>
                </div>
            </div>
            <div className="row services-list block-1-2 block-tab-full">
                {
                    services.map((service, index) =>
                        <div key={service?.id} className="col-block service-item" data-aos="fade-up">
                            <div className="service-icon">
                                <i className={service?.icon}/>
                            </div>
                            <div key={service?.id} className="service-text">
                                <h3 className="h2">
                                    {service?.title}
                                </h3>
                                <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium.
                                    Quo
                                    delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
                                    veritatis.
                                    Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                                </p>
                                <a href={`${getServiceSlug(service, index)}`} style={{marginBottom: "7rem"}}
                                   className="btn btn--stroke">
                                    View More
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Services;