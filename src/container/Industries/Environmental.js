import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class Environmental extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Environment
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/environment.svg" alt="environment" className="w-100" />
                                    </div>
                                    <p className="text-justify">The environment industry, otherwise known as the "eco-industry" as the name suggests,
                                    is related to environment
                                    wellbeing and protection. There are two major sub-sectors in the environment industry,
                                    pollution management and
                                        resource management.</p>
                                    <p className="text-justify">The environment industry is referred to as the ones that have been producing marketable
                                    goods or services in a way to
                                    control pollution and use eco-efficient technologies and promote the use of the same.
                                    They prevent damage and helps in
                                    sustainable development. Being in favor of being eco-friendly, they use eco-efficient
                                    technologies to assist in
                                        environment growth.</p>
                                    <p className="text-justify">The environment industry is policy-based and corporate, and environment governance is
                                    of utmost importance to these
                                    industries. The focus is majorly on using renewable energy sources and saving the
                                    replenishing energy source. This can
                                    include environmentally efficient fuel, eco-friendly construction methods, and
                                        eco-friendly methods of production.</p>
                                    <p className="text-justify">The industry had been invisible or out of the limelight of industries for a long time.
                                    With the increase in
                                    environment degradation, the industry has also come to light to the people with its
                                    efforts in making the effects
                                    reduce as much as possible. This has been possible due to the industry's innovation
                                    focus as they always innovate things
                                        that can result in higher sustainable development.</p>
                                    <p className="text-justify">A major use of technology in the environment industry is seen in the field of air
                                    pollution. The innovative
                                    technologies are used to monitor the pollution and also predict the effects of the same.
                                    </p>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.AirPollutionMonitoringPrediction}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Air Pollution Monitoring and
                                            Prediction</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
