/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class BusinessModelMakeover extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        The business model makeover
                                </h2>
                                    <div className="mb-4">
                                        <img src="img/svg/business_model_makeover.svg" className="img-fluid w-100" />
                                    </div>
                                    <p className="text-justify">Artificial intelligence is seen as a supporting tool and not something that serves as a
                                    replacement for human intelligence, instincts, and ingenuity. <b
                                            className="font-weight-bold">VisionAize’s</b> Artificial intelligence software can
                                    predict performance and return with synthesized courses of action and solutions. They
                                    can dispose of the results to the human user for value addition.</p>

                                    <p className="text-justify">In this way, humans can streamline the decision-making process and use artificial
                                    intelligence to game out possible outcomes and consequences of every action. The
                                    conventional business models relied upon and put their energies into advertising their
                                    products to create maximum awareness. These were the customer-centric models. However,
                                    apps, sites, or brands providing a personalized experience are appreciated more by the
                                    customers. This is possible with the introduction of artificial intelligence. The
                                    business models are updating to a customer-centric approach from the product-centric
                                    one. This journey was quite the need of the hour. </p>

                                    <p className="text-justify">Using the latest technologies and entering this crowded digital world has turned out to
                                    be a challenge for some and a boon for others. Well, it's all about finding that right
                                    place in the digital space and then holding on to it by implementing the latest trends
                                    and technologies in the business model. Especially, the customer-centric business models
                                    aided with artificial are booming in the current business world. Artificial Intelligence
                                    can help build business models to increase sales, detect fraud, improve customer
                                    experience, automate work processes, and provide predictive analysis.</p>


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
