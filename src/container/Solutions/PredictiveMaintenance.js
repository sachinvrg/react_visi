/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class PredictiveMaintenance extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Predictive Maintenance
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/predictive_maintenance.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify">Predictive Maintenance refers to the plan ahead of time in case a machine fails to
                                    operate. In this case, it needs to be
                                        fixed or replaced based on the developers' plan.</p>
                                    <p className="text-justify">Here, predictive Maintenance refers to how the developers plan to tackle a situation
                                    where the software and apps fail to
                                    do the work they are supposed to do. In such cases, the developers secure backup data
                                    for the companies that have placed
                                        their trust in the apps and software.</p>
                                    <p className="text-justify">Crowd maintenance apps have immediate alert systems in case of failure that impels the
                                    companies to stop the operations
                                        immediately.</p>
                                    <p className="text-justify">However, such a situation has not arisen yet. Even though some of the apps are still in
                                    the testing phase, the apps have
                                        worked well and are trusted by many companies that have been buying and using them.</p>
                                    <p className="text-justify">These apps have made the transport and logistic companies' working easier during the
                                    pandemic as they give real-time
                                        data and allows backup and safety measures to be executed.</p>
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
