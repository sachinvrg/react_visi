/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'
export default class LifeTimeValuePrediction extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Life Time Value Prediction <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mt-4 text-center">
                                        <img src="img/svg/life_time_value_preduction.svg" height="300" className="img-fluid" />
                                    </div>
                                    <p className="mt-4 text-justify">In a customer-centric organisation like banking, it is essential to know the
                                customer's lifetime value. <b className="font-weight-bold">VisionAize</b> helps your
                                institution identify your most profitable clients to provide them high priority service.
                                It is one level up that retains your customers. According to the Pareto Principle, it is
                                more about the 20% customer responsible for 80% of your profits. Using AI will give you
                                future earnings at an attractive discounted rate. Calculating a Customer's Lifetime
                                Value is a complicated calculation. You need to know the RFM- Recency, Frequency, and
                                Monetary Value. </p>

                                    <p className="text-justify">AI can not only compile it but also give you a clear cut insight into your customers'
                                    status. You can use this analysis to build new strategies. Since it is a parabolic model
                                    overlooking a single factor can cause you a lot! AI can improve Customer's Lifetime
                                    Value and make it a primary KPI. Forbes ranked this trend among the fastest growing
                                trends. </p>

                                    <p className="text-justify">AI can increase the quality of your customer service. This triggers the customers to
                                invest more in you. <b className="font-weight-bold">VisionAize</b> can work with a
                                hyper-targeted and holistic approach to
                                ensure that the customers agree to a long-term agreement. Customers feel that their
                                brand has become indispensable. They grow comfortable with you and cannot think about
                                moving out. AI can also predict a Customer's Lifetime Value. This keeps you a step ahead
                                always.</p>


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
