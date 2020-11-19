/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class TranspAndLogistic extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Transportation and Logistics
                            </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/logistic_transportation.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify">Indian transport and logistics industry have undergone rapid growth in the past few years
                                    or a decade. The contribution
                                    of the same has been 14%of the GDP as marked in 2019. India has been open to foreign
                                    trade. Due to the same reason, the
                                need for the logistics industry has also increased a lot.</p>
                                    <p className="text-justify">However, in 2020, with the pandemic’s incoming, the public transport sector has fallen
                                    back to a great extent. Due to
                                    regulations of social distancing, the transport has been held up for a long time. The
                                    logistics industry has also faced
                                    significant backfalls as the interstate trade was restricted, and international
                                    logistics was completely on hold.
                                    Clearly, there was a complete shut down to the transport system for a major part of the
                                    year. The hold has been lifted,
                                    and the transport systems are slowing coming to function with all the measures to be
                                    followed. With the coming of the
                                    unlocking period, the people still fear taking transport, logistics, and delivery
                                    systems, and in a way, it is right to
                                    avoid the virus, but the business has to continue so that the country does not fall into
                                    the hand of a deep recession.
                                    Due to the conditions in 2020 that are not hidden from anyone, business and trade for
                                    every industry have fallen. The
                                    e-commerce industry has, however, seen a huge increase in this. Businesses have started
                                    conducting online trade, and so
                                    has the transport and logistics industry. The industrial specialists have come up with
                                    logistic platforms and transport
                                    services with full precautions while following all the rules and regulations related to
                                    safety during the pandemic, as
                                under the government's guidance.</p>
                                    <p className="text-justify">The solutions provided can be complicated for a few. But, it is necessary and is followed
                                    by the people everywhere for
                                    the safety of everyone. Here is more to it.
                            </p>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.TranspAndLogistic} className="list-group-item list-group-item-action">
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
