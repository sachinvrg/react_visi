/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Banking extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Banking & Financial <span className="font-weight-light"></span>
                                    </h2>
                                    <p className="text-justify">
                                        Banking and Finance have always been a lot of work. The major energy is required to
                                        explain to the layman customer about everything. On top of that, there is so much data
                                        to compile, charts to prepare, graphs to plot and analyze. AI is a one-stop solution for
                                        many of these problems.
                            </p>

                                    <div className="row wow w-100 px-2 mt-4 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-md-4 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://www.intelligenttransport.com/wp-content/uploads/AI-1.jpg"
                                                    className="img_bg" />
                                                <h6>AI powered form processing<br /> <Link to={Links.AiPoweredProcessing}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-md-4 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://images.unsplash.com/photo-1562542472-c36f98399845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                                    className="img_bg" />
                                                <h6>Smart cheque processing<br /> <Link to={Links.SmartCheqe}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-md-4 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=1350&q=80"
                                                    className="img_bg" />
                                                <h6>Email automation<br /> <Link to={Links.EmailAutomation}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row wow w-100 px-2 justify-content-center fadeIn" data-wow-delay="0.4s">
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                                                    className="img_bg" />
                                                <h6>AI powered document processing<br /> <Link to={Links.DocumentProcessing}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                        <div className="text-left col-md-6 mb-3 px-2">
                                            <div className="feature-title title spacing">
                                                <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=1350&q=80"
                                                    className="img_bg" />
                                                <h6>Reduction of not performing assets<br /> <Link
                                                    to={Links.ReductionNotPerforming}
                                                    className="btn btn-outline-white btn-sm wow fadeIn waves-effect waves-light animated"
                                                    data-wow-delay="0.3s">View
                                                more</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h5 className="title my-5 wow fadeIn text-center font-weight-bold text-uppercase"
                                        data-wow-delay="0.2s">
                                        Financial Services | Solution Implementation Expertise
                            </h5>

                                    <div className="tabnlist row">
                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="font-weight-bold mb-2 h5">Non Performing Asset Prediction Analysis
                                            </p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$2M- $8M<br /><small>Est. ROI
                                                    Annually</small></b>

                                                </div>

                                                <p><b className="font-weight-bold mb-2">Business Problem: </b>

                                            Our client had an issue with Non Performing loans portfolio and was looking
                                            for a
                                            solution to identify and predict ”defaulters” earlier in the approval cycle.
                                        </p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create analytics to
                                                    improve classification accuracy</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Provide real time scoring
                                                    based on casual matrix</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Correlated data across 9
                                                        Million data points to identify and predict defaulters early in the
                                                    cycle.</small>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="list-group fanylist_group px-3">
                                                <div className="d-flex tabnlist_head mb-2 align-items-center">
                                                    <p className="font-weight-bold mb-2 h5">Non Performing Asset Prediction Analysis
                                            </p>
                                                    <b className="font-weight-bold mb-2 ml-auto">$2M- $8M<br /><small>Est. ROI
                                                    Annually</small></b>

                                                </div>

                                                <p className="text-justify"><b className="font-weight-bold mb-2">Business Problem: </b>

                                            Our client had an issue with Non Performing loans portfolio and was looking
                                            for a
                                            solution to identify and predict ”defaulters” earlier in the approval cycle.
                                        </p>
                                                <ul className="list-group list-group-flush py-2">
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Create analytics to
                                                    improve classification accuracy</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Provide real time scoring
                                                    based on casual matrix</small>
                                                    </li>
                                                    <li className="list-group-item py-1 px-2"><span className="pr-4"><i
                                                        className="fas fa-check"></i></span><small>Correlated data across 9
                                                        Million data points to identify and predict defaulters early in the
                                                    cycle.</small>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <table className="table table-bordered box-table">
                                        <thead className="blue-1 white-text">
                                            <tr>
                                                <th scope="col">S.No.</th>
                                                <th scope="col">Use Case</th>
                                                <th scope="col">Project Summary</th>
                                                <th scope="col">Estimated ROI</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>
                                                    <p>
                                                        Non Performing Asset Prediction Analysis
                                            </p>
                                                    <p className="font-weight-bold">
                                                        Business Problem:
                                            </p>
                                                    <p className="text-justify">Our client had an issue with Non Performing loans portfolio and was
                                                    looking
                                                    for a solution to identify and predict ”defaulters” earlier in the
                                                    approval
                                                    cycle.
                                            </p>
                                                </td>
                                                <td>
                                                    <ul className="listFinancial_services">
                                                        <li><i className="fas fa-check pr-2"></i>Create analytics to improve
                                                    classification accuracy</li>
                                                        <li><i className="fas fa-check pr-2"></i>Provide real time scoring based on
                                                    casual matrix</li>
                                                        <li><i className="fas fa-check pr-2"></i>Correlated data across 9 Million
                                                    data
                                                    points to identify and predict defaulters early in the cycle.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <span className="font-weight-bold">
                                                        $2M- $8M Estimated Annually
                                            </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>
                                                    <p>
                                                        KYC/AML Custom On-Boarding
                                            </p>
                                                    <p className="font-weight-bold">
                                                        Business Problem:
                                            </p>
                                                    <p className="text-justify">FinTech company leadership was looking to efficiently on-board customers
                                                    to
                                                    support its international expansion. Compliance with International KYC/
                                                    AML
                                                    regulations is necessary to provide such information to international
                                                    authorities, while keeping the brokerage license.
                                            </p>
                                                </td>
                                                <td>
                                                    <ul className="listFinancial_services">
                                                        <li className="text-justify"><i className="fas fa-check pr-2"></i>Identify possible behavior triggers
                                                    to
                                                    early identify and prevent inappropriate retail individuals to open
                                                    account with the financial institution.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Provide real time scoring based on
                                                    casual matrix</li>
                                                        <li><i className="fas fa-check pr-2"></i>Identify additional aspects to
                                                    improve
                                                    user experience, and adoption</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <span className="font-weight-bold">
                                                        $10M- $15M Estimated Annually
                                            </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>
                                                    <p>
                                                        AI-Powered Prospect Targeting.
                                            </p>
                                                    <p className="font-weight-bold">
                                                        Business Problem:
                                            </p>
                                                    <p className="text-justify">The client had a strategic effort to identify and targeting 10,000
                                                    potential
                                                    customers, while optimizing marketing spend through its International
                                                    expansion.
                                            </p>
                                                </td>
                                                <td>
                                                    <ul className="listFinancial_services ">
                                                        <li><i className="fas fa-check pr-2"></i>Create a data model to focus on
                                                    10,000
                                                    best potential international customers that fit the Financial
                                                    persona
                                                    profile.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Identify paths and patterns
                                                    preceding
                                                    to new account sign ups. </li>
                                                        <li><i className="fas fa-check pr-2"></i>Correlate social media channels
                                                    with a
                                                    goal to identify the best path to a net new customer acquisition.
                                                </li>
                                                        <li><i className="fas fa-check pr-2"></i>Extend the social media correlation
                                                    to
                                                    the data model to focus on 10,000 best potential customers</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <span className="font-weight-bold">
                                                        $12-20M Estimated Annually
                                            </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>
                                                    <p>
                                                        Multi-Channel Churn
                                            </p>
                                                    <p className="font-weight-bold">
                                                        Business Problem:
                                            </p>
                                                    <p className="text-justify">Our client wanted to create a predictable business process to reduce
                                                    churn in
                                                    their VIP clientele by 40%
                                            </p>
                                                </td>
                                                <td>
                                                    <ul className="listFinancial_services">
                                                        <li><i className="fas fa-check pr-2"></i>Create analytics to understand
                                                    multiple
                                                    paths to churn by combining data from call center, retail and social
                                                    media.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Provide better visibility in
                                                    different
                                                    paths to churn with focus on VIP customers.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Improve predictability of a churn
                                                    in
                                                    VIP customers.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Create an operating procedure to
                                                    notify
                                                    business retail branch leadership of a potential VIP customer churn.
                                                </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <span className="font-weight-bold">
                                                        $2M- $18M Estimated Annually
                                            </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>
                                                    <p>
                                                        International Arbitrage Trading
                                            </p>
                                                    <p className="font-weight-bold">
                                                        Business Problem:
                                            </p>
                                                    <p className="text-justify">Our client wanted to explore profitable opportunities in trading of
                                                    digital
                                                    assets through international arbitrage at over 500 global exchanges.
                                            </p>
                                                </td>
                                                <td>
                                                    <ul className="listFinancial_services">
                                                        <li><i className="fas fa-check pr-2"></i>Create a data model that included
                                                    530
                                                    global digital asset exchanges.</li>
                                                        <li><i className="fas fa-check pr-2"></i>Enrich the model with 1170 digital
                                                    assets and ingest the trading data real-time</li>
                                                        <li><i className="fas fa-check pr-2"></i>Identify trading opportunities in
                                                    real-time and provide actionable visualizations and insight to the
                                                    users.</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <span className="font-weight-bold">
                                                        $15M- $25M Estimated Annually
                                            </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.ImprovedCustomerRetention} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Improved customer retention</span></Link>
                                    <Link to={Links.Chatbots} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Chatbots</span></Link>
                                    <Link to={Links.CustomizedInvestments} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Customized Investments</span></Link>
                                    <Link to={Links.LifeTimeValuePrediction} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Life Time Value Prediction</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
