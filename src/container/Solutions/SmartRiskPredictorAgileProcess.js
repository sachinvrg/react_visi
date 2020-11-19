/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class SmartRiskPredictorAgileProcess extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Smart Risk Predictor for Agile <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mb-4">
                                        <img src="img/svg/financial_services.svg" className="img-fluid w-100" height="" />
                                    </div>
                                    <p className="text-justify">
                                        One of the serious issues of the Agile Process is the lack of proper software backup. AI
                                        can
                                        bring a revolution in project management and enhance productivity by automating
                                        repetitive, high volume tasks. AI can be used to deliver analytics like driven risk
                                        predictions
                                        and estimations, complete basic administration tasks. It can give actionable
                                        recommendations. AI can be a game-changer in risk management, transforming the face of
                                        agile processes. Using AI in agile processes like scrum, the software team can deliver
                                        an
                                        iterative approach to the project plan with extra focus on the possible risks and
                                        solutions for
                                        it. AI can offer support and improvisation of every step in the Agile Process. There can
                                        be
                                        four distinct features, analytics, planning, optimization, and conversational engines in
                                        the
                                        Agile Process. The risk management feature is possible due to machine learning. The
                                        algorithms collect, structure, and store data according to the associated risks.
                            </p>
                                    <p className="text-justify">Further, it automates tasks associated with risk management. A human's capacity is
                                    limited
                                    to storing and reproducing information. This becomes a hindrance to practical risk
                                    estimation. This is since every change in the scenario has some or other II effect on
                                    the
                                    project. As the interdependence is altered, the risk ratio changes too. This drawback of
                                    humans can be overcome by using AI-based soft wares for accounting for real-time
                                    adjustments.
                            </p>

                                </section>

                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.SmartRiskPredictorAgileProcess}
                                        className="list-group-item list-group-item-action"> <i className="fas fa-check mr-2"></i>
                                        <span>Smart Risk Predictor for Agile
                                    Process</span></Link>
                                    <Link to={Links.SuccessThroughSprints} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Success through Sprints</span></Link>
                                    <Link to={Links.ImprovementThroughDeepLearning}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Improvement through deep learning</span></Link>
                                    <Link to={Links.BusinessModelMakeover} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>The business model makeover</span></Link>
                                    <Link to={Links.StayingAheadCurveWith} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Staying ahead of the curve with AI</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        )
    }
}
