/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class DataLake extends Component {
    render() {
        return (
            <main>
                <section className="p-md-3 text-lg-left">
                    <div className="container pt-5">
                        <div className="row d-flex justify-content-center">
                            <h3 className="title pb-3 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s"
                                style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                Data Warehouse Modernization
                               <span className="font-weight-light border-line"> (Snowflake Capabilities)</span>
                            </h3>
                            <p className="text-justify">VisionAIze is helping customers modernizing data warehouse for faster insights and reduce costs.
                            </p>
                        </div>
                        <h4 className="title pb-5 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Our Journey
                           <span className="font-weight-light border-line"></span>
                        </h4>

                    </div>
                </section>
                <section className="light-blue-back py-5">
                    <div className="container">
                        <img className="img-fluid" src="img/svg/our journey.svg" />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <ul className="nav nav-tabs  md-tabs mt-5 box-tab" id="myTabJust" role="tablist">
                            <li className="nav-item waves-effect waves-light">
                                <a className="nav-link px-4 active" id="1" data-toggle="tab" href="#first" role="tab"
                                    aria-controls="health" aria-selected="true">Roadmap</a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                                <a className="nav-link px-4" id="2" data-toggle="tab" href="#second" role="tab"
                                    aria-controls="banking" aria-selected="false">Technology Stack</a>
                            </li>
                        </ul>
                        <div className="tab-content card p-5 mb-5" id="myTabContentJust">
                            <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="1">
                                <div className="row">
                                    <h4 className="title mb-5 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                        style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                        The Challenge <span className="font-weight-light"></span>
                                    </h4>
                                    <p className="text-justify">
                                        Every enterprise has data and the need to innovate is constantly increasing. Existing
                                        platforms and systems have constrained storage and compute power (licensing, lock-in
                                        etc).
                                        It’s extremely difficult to scale or provision for infrastructure meeting varying
                                        workloads.
                                        Data silos and use of various stacks over a period of time further aggravate this
                                        problem.
                                        There are too many tools and technologies and it’s becoming increasing difficult to
                                        evaluate
                                        and narrow down on technology stack. Overall, enterprises are facing a magnitude of
                                        challenges swiftly & securely migrating to the cloud.
                                    </p>
                                </div>
                                <hr />
                                <div className="row">
                                    <h4 className="title my-5 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                        style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                        How VisionAIze Helps Customers In Cloud Migration <span
                                            className="font-weight-light"></span>
                                    </h4>
                                    <p className="text-justify">
                                        With infinite storage, on-demand scaling, multi-cluster for high concurrency, ability to
                                        derive analytics from petabyte (PB) scale warehouse using the power of SQL and an
                                        amazing
                                        partner ecosystem – Snowflake is becoming the defacto choice for modern cloud data
                                        warehouse.
                                    </p>
                                </div>
                                <hr />
                                <img className="img-fluid" src="img/Images/How-We-Help-organisations-Modernizing.png" />
                            </div>
                            <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="2">
                                <div className="row">
                                    <h4 className="title mb-5 wow fadeIn text-center font-weight-bold" data-wow-delay="0.2s"
                                        style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                        Our AWS/Azure -Driven Technical Stack Helps Organisation Modernising Their Data
                                        Warehouse <span className="font-weight-light"></span>
                                    </h4>

                                    <img className="img-fluid" src="img/Images/Technical-Stack-Helps-Organisation-Modernising.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
