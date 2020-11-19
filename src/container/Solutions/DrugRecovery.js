/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class DrugRecovery extends Component {
    render() {
        return (
            <main>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section>
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Drug Discovery <span className="font-weight-light"></span>
                                </h2>
                                <div className="mb-4">
                                    <img className="img-fluid" src="img/svg/drug_discovery.svg" className="w-100 img-fluid"/>
    
                                </div>
                                    <p className="mt-4 text-justify">
                                    The Drug Discovery mechanisms, including AI, uses technologies that use AI to become
                                    versatile equipment that can be utilized ubiquitously. It can be applied in multiple
                                    drug development levels, such as identification and validation of drug targets,
                                    designing new drugs, drug repurposing, enhancing the R & D efficiency, aggregating, and
                                    studying biomedicine data. </p>
    
                                    <p className="text-justify"><b className="font-weight-bold">VisionAize’s</b> high tech AI solutions can accumulate
                                    diverse streams of biomedical and healthcare data. It can collect and relate
                                    longitudinal electronic medical records, next-generation sequencing, and other data into
                                    mechanistic computer models representing individual patients. AI can design new
                                    molecules and inculcate them in the design-make-test cycle rapidly. It can run the
                                    absorption, distribution, metabolism, excretion (ADME), and toxicity predictions
                                    analysis very rapidly with accurate results. AI can bring together data points obtained
                                    from different studies to the most promising drug candidates. It can also use a deep
                                    convolutional neural network to do structure-based drug design.</p>
    
                                    <p className="text-justify">AI can learn chemistry right from recognizing protein and ligand structures to their
                                    interactions in the simplest feature up and full objects. Target-based drug study is
                                    also possible through AI technology. Till now, we were working on one target one
                                    disease. However, the body is a complex structure, and there is a need to see the
                                    complex interactions of various diseases collectively. This is well beyond human
                                    intervention, as there are many parameters to consider. Using AI can help to solve these
                                    issues.
    
                                </p>
    
    
                            </section>
                        </div>
                        <div className="col-md-4">
                            <div className="list-group fanylist_group">
                                <Link to={Links.ClaimsPredictions} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Claims (Fraud & Rejection)
                                        Prediction</span></Link>
                                <Link to={Links.FludemicPrediction} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Fludemic (Data Driven Health)
                                        Prediction</span></Link>
                                <Link to={Links.DrugRecovery} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drug Recovery</span></Link>
                                <Link to={Links.RiskProfileAnalyzer} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Risk Profile Analyzer using Genomics</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        )
    }
}
