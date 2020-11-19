/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class PandemicCrowdControl extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Pandemic Crowd Control App
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/crowd_control.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify" className="text-justify">Another solution that has been introduced by the e-commerce industry is the "pandemic
                                    crowd control app." These apps
                                        have been launched with respect to the recent pandemic alert situations.</p>

                                    <p className="text-justify">With every city coming back to life and every business starting to conduct the trade to
                                    keep up in the market, controls
                                    are necessary to reduce the virus's spread. There are a few developers who have come up
                                    with crowd controlling apps for
                                    the pandemic. Such apps are equipped with all the functions and call to action buttons
                                    that are deemed necessary for
                                        everyone who is in need to go out.</p>

                                    <p className="text-justify">The Pandemic Crowd Control Apps provide information on the headcount of people in
                                    different places. These apps not just
                                    used by one industry but all of them. The logistics and transportation industry has also
                                    started using crowd management
                                        apps to avoid contacts and be on the safer side.</p>

                                    <p className="text-justify">Such apps have proven to be 99% accurate in counting the number of people entering and
                                    exiting a space. The industries
                                    that need to call the employees for fieldwork, such as the transportation industries,
                                    can use it to control the on-site
                                        crowd.</p>

                                    <p className="text-justify">Some apps for crowd management does not use cameras. This also means that management apps
                                    do not infiltrate employee
                                    privacy. They just show the number of presents and the capacity that the physical space
                                    should hold to make the physical
                                        contact the least and the chances of the spread of the virus negligible.</p>

                                    <p className="text-justify">Some of these apps are also developed with a symptom tracking system to track the
                                    employees that are suffering from the
                                    virus. The company can then take measures to stop the spread by giving leaves.
                                    </p>
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
