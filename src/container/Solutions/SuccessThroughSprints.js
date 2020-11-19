/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class SuccessThroughSprints extends Component {
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
                                    <div className="mb-4">
                                        <img src="img/svg/sprint_Poc.svg" className="img-fluid w-100" />
                                    </div>
                                    <p className="text-justify">Sprints and Marathons are a great starting point to go through your project's business
                                    and technical details. This step is done before you reach the PoC. AI Sprints use AI
                                    algorithms to give you results in the form of a PoC as soon as it becomes possible. The
                                    AI Sprint is a blend of workshops and proof-of-concept. It helps you verify the
                                    feasibility of the project using real business cases and real data from both past and
                                present. </p>

                                    <p className="text-justify">This is conventionally done through manual Sprints.
                                <b className="font-weight-bold">VisionAize’s</b> AI-based Sprint's main advantage is that AI can enhance parts of your business better
                                than manual sprints in a
                                minimal time. An AI-based sprint can also provide you with a better understanding of the
                                problem, key performance indicators relevant for the particular project, a summary of
                                process changes, and proposal roadmaps. </p>

                                    <p className="text-justify">AI sprints are short in term and take within one to three weeks. AI sprints can time
                                    condense insights into a particular solution's usefulness and validity to a business
                                    challenge and project. AI Sprints can use data from different sources like CRM systems,
                                    corporate databases, and files in structured and unstructured formats to access the
                                    possible solution to any business problem. The solutions are reliable, and adjustments
                                    can be made. This makes AI sprints a flexible, versatile, and fast data processing tool.
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
