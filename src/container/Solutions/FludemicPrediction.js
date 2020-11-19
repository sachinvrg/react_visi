/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class FludemicPrediction extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Fludemic (Data Driven Health) Prediction
                                    <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/datadriven_healthcare.svg" className="img-fluid" height="300" />
                                    </div>
                                    <p className="text-justify">
                                        The world population is increasing every day. With such high numbers, the conventional
                                        method of authorities visiting each individual's home for data is absurd. What can AI do
                                        to
                                        solve this? A lot many things. Health organisations are now using data banks for
                                        predictive
                                        analytics of the health risks amongst the masses. This data is collected based on
                                        Electronic
                                        Health Records, biometric data, lab tests, smart gadgets, mobile phones, smart bands,
                                        special apps, health apps, etc. AI can use this data to identify the population with
                                        risks. This
                                        can be further classified according to the vulnerability, type of diseases, etc. This
                                        type of
                                        data-driven analysis is called a Fludemic. Fair use of this can be seen in significant
                                        apps used
                                        to alert against the Corona Pandemic. The reason why AI is more efficient is understood.
                                        The numbers and computational data is enormous. Humans cannot do much in the field.
                                        We need smart technology that can compute the data. Humans can put their contribution
                                        to this. However, no doubt, the process becomes much simplified and efficient with the
                                        use
                                        of AI and Machine Learning. Big data analytics gives machine learning models the power
                                        to
                                        improve healthcare services in highly prone regions. It helps in accurate and timely
                                        prediction of chronic diseases like cancers. It can help in the early diagnosis of
                                        diseases, thus
                                        giving more time to cure diseases and save lives.
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
                            {/* <!-- <div className="col-12 mt-4">
                                <img className="img-fluid w-100" src="img/svg/solution_data_model.svg" >
                               
                        </div> --> */}
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
