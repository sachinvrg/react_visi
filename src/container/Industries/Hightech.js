import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Hightech extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        High-Tech Solutions

                            </h2>
                                    <p className="text-justify">VisionAize helping market-leaders those who are looking at artificial intelligence to
                                    achieve unparalleled scale and speed in getting results. VisionAize high tech AI
                                    solutions enables companies to understand how companies can improve processes, enhance
                                    partnerships and gauge market forces.
                            </p>
                                    <h4 className="title my-5 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                        style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>VisionAize
                                        helping Businesses with the high-tech AI solutions to reconstruct 3 major areas:
                            </h4>

                                    <ul className="list-group list-group-flush py-3">
                                        <li className="list-group-item"><span className="pr-4"><i
                                            className="fas fa-check"></i></span>Offering predictive business model through
                                    AI solutions.</li>
                                        <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>To
                                    reduce the time in market using agile sprint methods</li>
                                        <li className="list-group-item"><span className="pr-4"><i
                                            className="fas fa-check"></i></span>Through deep learning VisionAize creating
                                    always improving product development model </li>

                                    </ul>

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

            </main>
        )
    }
}
