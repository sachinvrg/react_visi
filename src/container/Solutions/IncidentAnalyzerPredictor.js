/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'
export default class IncidentAnalyzerPredictor extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Incident and analyzer and predictor
                                    </h2>
                                    <div className="view overlay rounded mb-lg-0 mb-4">
                                        <img className="img-fluid m-auto" src="img/Images/oilgas_incident.png" alt="Sample image" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>
                                    <p className="mt-4 text-justify">
                                        The oil and gas industry works in a very critical atmosphere. The risks of accidents and
                                        injuries are much higher as compared to other manufacturing industries. Employees in the
                                        oil and gas industry are exposed to varying temperatures, toxic fumes. They must be
                                        careful throughout their work as so many things are moving. Obliging to safety standards
                                        enforced by law is necessary for the company. Not maintaining these standards result in
                                        hefty fines. Although, there is so much data to monitor, safety issues to check. It is
                                        still primarily done through manual processes like manually monitoring camera feeds;
                                        physical safety sweeps to make sure everything is working correctly. </p>

                                    <p className="text-justify"><b className="font-weight-bold">VisonAize’s</b> AI-aided computer model can be a solution to
                                        monitor the worksite, to ensure workers are following safety procedures, and that there
                                        is no carelessness. The camera data can be fed into an AI algorithm. It can then be
                                        studied to receive alerts and prior recommendations. AI can create alerts and send them
                                        to management even in the smallest deviations in conduct.</p>

                                    <p className="text-justify">Another major challenge in the oil and gas industry is identifying improper threading in
                                    pipelines and defects in error-prone regions. Deficiencies can lead to increased factory
                                    costs and budgets. Employing a computer vision based on the AI system can verify the
                                    quality of production. It can also provide deep insights into defects in analytics.
                                    These AI aided Defect Detection solutions are cost-effective and are economical as
                                    compared to the prevailing processes.
                                    </p>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.DrillingNptPredictor} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drilling/NPT Analyzer and Predictor</span></Link>
                                    <Link to={Links.IncidentAnalyzerPredictor} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Incident Analyzer & Predictor (Refinery &
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
