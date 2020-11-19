import React, { Component } from 'react'

export default class Enterprise extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12">
                                <p className="text-justify">Enterprises bearing in mind any IT initiative are most often faced with a ‘build vs buy’ choice
                                of decision. Introduction of Cloud or SaaS makes this decision process even more complex. To
                                start with a ready-made prototype application platform, an organisation can significantly reduce
                                time-to-market and enhance their business process solutions in terms of overall scalability and
                        maintainability.</p>

                                <p className="text-justify">Over the years of permanent evolution and occasional revolutions the tech-guys here at Ideation
                                has developed an advanced, state of the art enterprise application platform (a.k.a. framework)
                                that allows us to build advanced competencies in most of the enterprise business processes in
                                today’s world. Through our product development activities added with our experience in a handful
                                implementation and extension projects we have done for customers, we bring our insight coupled
                                with immense in-depth expertise in this space, supporting everything from Cloud Services to
                                end-to-end Enterprise Automation Solution, Business Intelligence, Business Process Management,
                                Client Relationship Management, Enterprise Application Integration, E-Commerce and many more
                        technology domains.</p>

                                <p className="text-justify">Enterprise Application is a term which is not very well defined. People from many different
                                sectors of technology and industry have tried to define according to their individual views
                                about it, and so there exist many notions about it. If we consider the essential parameters for
                                an Enterprise Application, then these are mostly non-functional parameters e.g.,

                    </p>
                            </div>

                            <div className="col-md-6">
                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Distributed
                        </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Scalable</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Secure</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Resilient</li>
                                </ul>

                                <p className="mt-3">There are some functional parameters as well, most important among these are</p>

                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Proper
                            monitoring, logging and recovery features</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Capability to
                            be integrated with various systems</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Ability to
                            define events and proper handling of events, etc.</li>
                                </ul>

                            </div>
                            <div className="col-md-6 text-center py-3">
                                <img src="img/svg/diagram001.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid blue px-0">

                        <div className="container">
                            <div className="row features wow fadeIn mb-5 pt-5 " data-wow-delay="0.2s">

                                {/* <!--Grid column--> */}
                                <a href="#" className="col-lg-3 col-md-6 text-center hoverable p-4">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/001-workflow.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Distributivity</h5>
                                        <div className="mt-1 text-white">
                                            <p>Communication between the components via persistent message queues to achieve
                                    distributiveness</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <a href="#" className="col-lg-3 col-md-6 text-center hoverable p-4">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/002-innovation.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Scalability</h5>
                                        <div className="mt-1 text-white">
                                            <p>Using vertical as well horizontal clustering, the scalability issue is addressed

                                </p>
                                        </div>
                                    </div>
                                </a>

                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <a href="#" className="col-lg-3 col-md-6 text-center hoverable p-4">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/003-concept.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Security</h5>
                                        <div className="mt-1 text-white">
                                            <p>
                                                Adherence to top OWASP guidelines
                                                Enabling SSL for transmission layer
                                    Asymmetric Encryption of sensitive data</p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <a href="#" className="col-lg-3 col-md-6 text-center hoverable p-4">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/004-deliver_value.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Authentication & Authorization
                            </h5>
                                        <div className="mt-1 text-white">
                                            <p>We have solved this issue using a distributed cache shared by all the components.

                                </p>
                                        </div>
                                    </div>
                                </a>
                                {/* <!--Grid column--> */}

                            </div>
                        </div>
                    </div>

                    <section className="p-md-3  text-lg-left">
                        <div className="container ">


                            <ul className="nav nav-tabs  md-tabs  box-tab" id="myTabJust" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link px-4 active" id="1" data-toggle="tab" href="#first" role="tab"
                                        aria-controls="health" aria-selected="true">Multi-tenant</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" id="2" data-toggle="tab" href="#second" role="tab"
                                        aria-controls="banking" aria-selected="false">Database independent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" id="3" data-toggle="tab" href="#third" role="tab"
                                        aria-controls="mobility" aria-selected="false">API</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" id="3" data-toggle="tab" href="#fourth" role="tab"
                                        aria-controls="mobility" aria-selected="false">Access Control</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" id="3" data-toggle="tab" href="#fifth" role="tab"
                                        aria-controls="mobility" aria-selected="false">Alert</a>
                                </li>
                            </ul>
                            <div className="tab-content card mb-5" id="myTabContentJust">
                                <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="1">
                                    <div className="row px-3">
                                        <div className="col-md-6 p-3">

                                            <h4 className="my-4">Multi-tenant</h4>

                                            <p className="text-justify">The term "software multitenancy" refers to a software architecture in which a single
                                            instance of software runs on a server and serves multiple tenants. A tenant is a
                                            group of users who share a common access with specific privileges to the software
                                            instance. The framework is multi-tenant by design. So the applications that we
                                            create on top of this framework are all multi-tenant by design
                                </p>


                                        </div>
                                        <div className="col-md-6 py-3 px-3 text-center">
                                            <img className="roundImage" src="img/Images/multi_tenet.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="2">
                                    <div className="row px-3">

                                        <div className="col-md-6 mx-auto py-3 text-center px-3">
                                            <img className="roundImage" src="img/Images/database.jpg" />
                                        </div>

                                        <div className="col-md-6 p-3">

                                            <h4 className="my-4">Database independent</h4>

                                            <p className="text-justify">The database connectivity is completely done through an ORM layer, e.g., Hibernate.
                                            So the application is not tightly coupled to any particular vendor, and it becomes
                                            very easy to replace it with another one.




                                </p>


                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="3">
                                    <div className="row px-3">
                                        <div className="col-md-6 p-3">

                                            <h4 className="my-4">API</h4>

                                            <p className="text-justify">organisations need to make strategic marketing decisions for their new and existing
                                            product lines on a regular basis. This includes intelligently distributing resources
                                            and re-doing budget allocations that can drive better sales and organisational
                                            growth.
                                </p>

                                        </div>
                                        <div className="col-md-6 mx-auto text-center py-3 px-3">
                                            <img className="roundImage" src="img/Images/api.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="3">
                                    <div className="row px-3">
                                        <div className="col-md-6 mx-auto text-center py-3 px-3">
                                            <img className="roundImage" src="img/Images/accesskey.jpg" />
                                        </div>
                                        <div className="col-md-6 p-3">

                                            <h4 className="my-4">Access Control</h4>

                                            <p className="text-justify">By design, the different menu items are attached to different tasks. These tasks are
                                            the operational units in the back-end, and a menu level access control will be easy
                                            to implement


                                </p>


                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="fifth" role="tabpanel" aria-labelledby="3">
                                    <div className="row px-3">

                                        <div className="col-md-6 p-3">

                                            <h4 className="my-4">Alert</h4>

                                            <p className="text-justify">Integration with SMTP servers and SMS gateways provides an easy way to channelize the
                                            alerts generated during abnormal situations

                                </p>


                                        </div>
                                        <div className="col-md-6 mx-auto py-3 px-3">
                                            <img className="roundImage" src="img/Images/alert.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
