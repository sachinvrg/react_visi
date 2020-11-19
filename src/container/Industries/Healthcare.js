/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Healthcare extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Healthcare <span className="font-weight-light"></span>
                                    </h2>
                                    <p className="text-justify">
                                        As one of the pioneering companies Ideation Technology has embarked on providing the
                                        Health
                                        Care Business world Analytics approach in making the Return on Investment and
                                        Care-as-a-Service with the best offer to the stakeholders. The optimization and
                                        service-profitability to all stakeholders also reduces the cost-overhead to the
                                        end-users
                                        and service takers. Ideal Healthcare Solution proves this hypothesis into practice by
                                        bringing in the Data Analytics and Business Intelligence technology.
                            </p>
                                    <p className="text-justify">
                                        Transparency, accountability, quantitative comparison and fullest possible visual
                                        rendition
                                        in Health Care is proffered to the patients and care-providers. A quantitative measure
                                        of
                                        quality care is what we provide by combining the best-of-the-practice Science and
                                        Technology.
                            </p>
                                    <p className="text-justify">
                                        IDEAL HEALTHCARE is that solution which combines the knowledge and wisdom of domain
                                        experts,
                                        technologists and hands on practitioners making people judge and decides their value of
                                        service they would get.
                            </p>
                                    <h4 className="title my-5 wow fadeIn  font-weight-bold" data-wow-delay="0.2s">
                                        The main features of this <span className="font-weight-light">application are</span>
                                    </h4>
                                    <div className="row wow w-100 px-2 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://goodnewsplanet.com/wp-content/uploads/2020/09/happy-nurses-doctors-hospital_13339-6305-1.jpg"
                                                    className="img_bg" />

                                                <h6>Implementing preventing healthcare<br /> <Link to={Links.ImplementHealthcare}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://www.testtargettreat.com/content/ttt/en/home/educational-resources/case-studies/influenza-case-study/_jcr_content/mainpar/alereimage_1665461060.img.jpg"
                                                    className="img_bg" />
                                                <h6>Decision supports for hospitals<br /> <Link to={Links.DecisionSupports}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://etimg.etb2bimg.com/thumb/msid-72818662,width-1200,resizemode-4/.jpg"
                                                    className="img_bg" />
                                                <h6>Data driven decision support for drug discovery<br /> <Link
                                                    to={Links.DataDriven}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-lg-6 col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://www.biospectrumasia.com/uploads/articles/patients_slider-8842.jpg"
                                                    className="img_bg" />
                                                <h6>clinical trial planning and execution <br /> <Link to={Links.ClinicalTrial}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                    </div>

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
