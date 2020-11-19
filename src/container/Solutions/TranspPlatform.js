import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Links } from '../../app/links'
export default class TranspPlatform extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Transport Platform
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/logistic_transportation.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify">With the never-ending increasing pandemic, the transportation and logistics industries
                                    had to come up with a solution to
                                        carry their businesses. One such initiative was "transport platforms."</p>
                                    <p className="text-justify">Transportation platform is a very secure and mostly online way of controlling the
                                    transportation system. These platforms
                                    are cloud-based software for data integration and data storage of the transport and
                                    logistic service. Such software is
                                        not in need of manpower to contact each other during the pandemic situation.</p>
                                    <p className="text-justify">All the information is available on the screen, with efficient network usage. It helps in
                                    managing all the transport and
                                    logistic service together. The management through the software spreads all over the
                                    country and gives access to
                                    locational benefits. The administration of the city has also become easier with the help
                                    of the same. Having the correct
                                    focus on data and transport management allows businesses to swiftly conduct operations
                                        and safety.</p>
                                    <p className="text-justify">In fact, with awareness about the situation all the time on screen, it is a lot easier
                                    for the companies to manage their
                                        businesses and assist the work in times of need.</p>
                                    <p className="text-justify">The apps and software are being used by the companies' maximum to avoid the spread of the
                                    coronavirus among the
                                    employees. The employees who were otherwise responsible for working on the same in a
                                    cubical can now do all the
                                        operations and data entry from their homes in a safe way on the apps.</p>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.TranspPlatform} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Transport Platform</span></Link>
                                    <Link to={Links.PandemicCrowdControl} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Pandemic Crowd Control App</span></Link>
                                    <Link to={Links.PredictiveMaintenance} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Predictive Maintenance</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
