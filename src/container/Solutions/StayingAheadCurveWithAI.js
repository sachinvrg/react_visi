/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class StayingAheadCurveWithAI extends Component {
    render() {
        return (
            <main>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section>
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Staying ahead of the curve with AI
    
                                </h2>
                                <div className="mb-4 text-center">
                                    <img src="img/svg/stay_ahead_ai.svg" className="img-fluid" height="300"/>
                                </div>
                                    <p className="text-justify"><b className="font-weight-bold">VisionAize’s</b> AI can help you to predict the next big
                                    thing in your business. AI can help you to predict the best for you, monitor your
                                    competition, organise your data, and much more. We are at the edge of the fourth
                                    industrial revolution, and the future is made of AI. </p>
    
                                    <p className="text-justify">The need is to shift the focus away from what technologies are being offered. Instead,
                                    the focus should be on how these technologies are impacting the user cases of
                                    company-specific, along with enhancing their outcomes. AI is seen automating previous
                                    jobs that were done manually and condensing the time-consuming processes. </p>
    
                                    <p className="text-justify">Companies with large supply chains with millions of orders or purchases to process, data
                                    handling, and handling invoicing and procurement processes can be tedious. No one can
                                    afford to employ a workforce that big. The same is with every IT sub-sector. To stay
                                    ahead of the crossing curve, you must identify the curve. Timing is very crucial here.
                                    You have to identify the curve fast and then work on the tactics to stay ahead. AI is
                                    the key to do all of it.</p>
    
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
