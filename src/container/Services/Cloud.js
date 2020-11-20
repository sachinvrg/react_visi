/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'

export default class Cloud extends Component {
    render() {
        return (
            <main>
                <section className="light-blue-back pb-5">
                    <div className="container">
                        <p className="pt-5 text-justify">
                            Our Cloud services helps organistions to enhance customer experience, accelerating business outcomes
                            and building future ready capabilities. We help our customers optimize, scale, manage and outsource
                            IT resources to reduce investments. Our industry solutions help simplify processes, modernize
                            applications and enable cognitive intelligence to meet our customers’ business requirements.
                    </p>
                        <h4 className="title my-5 wow fadeIn font-weight-bold text-left" data-wow-delay="0.2s"
                            style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            We Offer
                    </h4>
                        <p className="text-justify fontW-500">
                            Public Cloud: A Public Cloud is where the service provider makes resources (storage, applications
                            etc.) available to the general public over the Internet. The storage is managed by an external
                            organisation. Public cloud services may be free or offered on a pay-per-usage model;
                    </p>
                        <p className="text-justify fontW-500">
                            Private Cloud: A Private Cloud is a cloud computing platform that is implemented within the
                            corporate firewall. Unlike public clouds, which deliver services to multiple organisations, a
                            private cloud infrastructure is operated solely for a single organisation, whether managed
                            internally or by a third-party, and hosted either internally or externally;
                    </p>
                        <p className="text-justify fontW-500">
                            Hybrid Cloud: A Hybrid cloud is an integrated cloud service. This model takes advantages of both
                            public and private cloud services by allowing workloads to move between private and public clouds as
                            computing needs and costs change. Hybrid cloud gives businesses greater flexibility and more data
                            deployment options;
                    </p>
                        <p className="text-justify fontW-500">
                            Community Cloud: A Community Cloud is where the infrastructure is shared among several organisations
                            from a specific group with common computing interests (security, compliance, jurisdiction, etc.).
                            The costs are shared by fewer users than a public cloud but more than a private cloud;
                    </p>
                    </div>
                </section>
                <section>
                    <div className="container py-5">
                        <h3 className="title wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s"
                            // eslint-disable-next-line react/style-prop-object
                            style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Benefits of
                       <span className="font-weight-light border-line"> Cloud Computing</span>
                        </h3>
                    </div>
                </section>
                <section className="text-left pb-5">
                    <div className="container">
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                                <img src="img/Images/a4.jpg" className="img-fluid" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 mb-4 mb-lg-0">

                                <ul className="list-group list-group-flush">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Reduce infrastructure cost
                                    </li>
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Reduce resource cost
                                    </li>
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Security
                                    </li>
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Accessbility
                                    </li>
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Persona-based digital
                                        consumption design
                                    </li>
                                        <li className="list-group-item">
                                            <span className="pr-4"><i className="fas fa-check"></i></span> Collaboration efficiency
                                    </li>
                                    </ul>
                                </ul>
                            </div>
                            {/*Grid column */}
                        </div>
                        {/*Grid row*/}
                    </div>
                </section>
            </main>
        )
    }
}
