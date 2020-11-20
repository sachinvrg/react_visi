/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class RiskProfileAnalyzer extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Risk profile analyzer using genomics <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="view overlay rounded mb-lg-0 mb-4">
                                        <img className="img-fluid" src="img/Images/m1.png" alt="Sample image" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>
                                    <p className="mt-4 text-justify">AI software and hardware, including deep learning algorithms and the
                                    graphics processing units, can be used as genomics to process large and complex genomic
                                    datasets. <b className="font-weight-bold">VisionAIze’s</b> AI-based systems are well
                                    developed to perform clinical diagnostic tasks. It can be used for risk prediction in
                                    both common and uncommon complex diseases. The physical model that controls the diseases
                                    is unknown. Hence, the advanced interpretation of genomics-based on artificial
                                    intelligence and machine learning approaches is the need of the hour.</p>

                                    <p className="text-justify">The capability to understand the DNA sequence enables researchers the ability to read the
                                    genetic blueprint. The genetic blueprint is the one responsible for all the activities
                                    of a living organism. Genomics is a science of precision. Without precision, it is very
                                    risky. AI naturally helps to achieve precision by removing human errors. Machine
                                    learning can be used to recognize patterns in the high volume of genetic data sets.
                                    These patterns can be fed to the AI-based computer models, which may predict the
                                    individual's probability of developing a certain particular disease. It can also help in
                                    the design of potential therapies and solutions. </p>

                                    <p className="text-justify">Companies can provide a detailed analysis of the customer's genome. Companies can use
                                    AI-based practices to understand how genomics is impacting and how genetic research is
                                    conducted. It can also predict how the clinicians should provide care to the patients.
                                    AI can make genomics more accessible to customers interested in learning more about
                                    their heredity and how it may impact their health in the near future.

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
