/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class ClaimsPredictions extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Claims predictor <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mb-4">
                                        <img className="img-fluid w-100" src="img/svg/claim_preduction.svg" />

                                    </div>
                                    <p className="mt-4 text-justify">A cloud-based AI platform is purposefully built to ingest claims data
                                    seamlessly. It uses
                                    a myriad of syndicated data sources. It also finds a pattern using the deep learning
                                    numeral method to provide insightful predictions. AI-based claims predictor also makes
                                    sure that the API based integration is easy to deploy. The processing of claims becomes
                                    efficient. It can take hours and days to process claims. </p>

                                    <p className="text-justify">The <b className="font-weight-bold">VisionAIze’s</b> AI aided platform can fast forward the
                                    process of claim closure. Insurance is a risky business and leads to considerable losses
                                    to the company if the prediction is not accurate. One of the major causes of increased
                                    payments is human errors made while processing claims. It also adds to a significant
                                    amount of administrative costs. AI can achieve high accuracy, strengthen claims
                                    management by systematic operation in identifying errors. AI can also help insurers to
                                    screen cases efficiently with greater precision and make accurate predictions. It also
                                    helps to stop money laundering practices and forgery. </p>

                                    <p className="text-justify">The AI algorithm is unbiased and works the same for every case. Deep learning algorithms
                                    outperform human interventions. It progressively uses data to extract all features at a
                                    lower cost and increase efficiency. It doesn't need manual inputs and uses entity
                                    embedding. AI can be used to generate accurate data across the value chain that helps to
                                    identify risk, claims, and customer actions. This is done by using advanced predictive
                                    accurateness. The potential applications of AI in insurance are plentiful. It can be
                                    used to enhance perceptive risk appetite, premium leakage, expense administration,
                                    subrogation, proceedings, and fraud detection.
                                </p>

                                    {/* <!-- <h4 className="title my-5 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                    The main features of this <span className="font-weight-light">application are</span>
                                </h4> --> */}

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
