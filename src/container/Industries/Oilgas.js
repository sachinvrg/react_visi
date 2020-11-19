import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class Oilgas extends Component {
    render() {
        return (
            <main>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <section>
                                    <h2 class="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Oil, Gas & Petrochemical <span class="font-weight-light">Situational Awareness
                                        Solutions</span>
                                    </h2>
                                    <h4 class="title mb-5 wow fadeIn" data-wow-delay="0.2s">
                                        Intelligent, integrated systems for critical infrastructure protection
                                </h4>
                                    <p className="text-justify">
                                        Our cutting-edge, intelligent technology solutions offer the latest in complete system
                                        integration and situational awareness. All systems are based upon our centraco® Command
                                        and
                                        Control Software platform which allows for complete visibility of an unlimited number of
                                        systems and subsystems such as video management, access control and others.
                                </p>
                                    <p className="text-justify">
                                        All employees engaged in this industry are certified by the Department of Homeland
                                        Security
                                        to handle CVI or Chemical Vulnerability Information related to CFATS (Chemical Facility
                                        Anti-Terrorism Standards) compliance.
                                </p>
                                    <h4 class="title my-5 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                        Applications include
                                </h4>
                                    <ul class="list-group list-group-flush py-3">
                                        <li class="list-group-item"><span class="pr-4"><i
                                            class="fas fa-check"></i></span>Facility Safety & Security
                                    </li>
                                        <li class="list-group-item"><span class="pr-4"><i class="fas fa-check"></i></span>CFATS
                                        Compliance</li>
                                        <li class="list-group-item"><span class="pr-4"><i
                                            class="fas fa-check"></i></span>Enterprise Information Management &
                                        Consolidation</li>
                                        <li class="list-group-item"><span class="pr-4"><i
                                            class="fas fa-check"></i></span>Emergency Preparedness</li>
                                        <li class="list-group-item"><span class="pr-4"><i
                                            class="fas fa-check"></i></span>Security Consulting</li>
                                    </ul>
                                </section>
                            </div>
                            <div class="col-md-4">
                                <div class="list-group fanylist_group">
                                    <Link to={Links.DrillingNptPredictor} class="list-group-item list-group-item-action"> <i
                                        class="fas fa-check mr-2"></i> <span>Drilling/NPT Analyzer and Predictor</span></Link>
                                    <Link to={Links.IncidentAnalyzerPredictor} class="list-group-item list-group-item-action">
                                        <i class="fas fa-check mr-2"></i> <span>Incident Analyzer & Predictor (Refinery &
                                        Pipeline</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
