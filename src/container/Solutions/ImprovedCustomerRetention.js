/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class ImprovedCustomerRetention extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Improved customer retention <span className="font-weight-light"></span>
                                    </h2>

                                    <div className="mb-4">
                                        <img src="img/svg/customer_retention.svg" height="400" />
                                    </div>
                                    <p className="text-justify">A Banking institution depends entirely on its customers. Research says that if you
                                    improve
                                    your customer retention by as much as 5%, its profit may go up by 25% to 95%; this makes
                                customer retention a very important factor. <b className="font-weight-bold">VisonAize </b>
                                makes sure that AI can be used as
                                an
                                 effective aid to do so. You can build an intelligent experience by leveraging Artificial
                                Intelligence and Machine Learning. By doing so, the machine would embed all the
                                predictions and insights directly into your CRM workflow. Institutions lose their
                                valuable
                                time to predict customer flow. This is a double loss first, as time is money.</p>

                                    <p className="text-justify">Second, missing the opportunity to connect to the customer at the right time.</p>

                                    <p className="text-justify">It is crucial to start analyzing your graph right when you acquire a customer. Your
                                    customer
                                    slowly measures the quality of your products and service. VisonAize’s Customers are
                                    delighted by improved experiences. For them, you are their one provider. If you do not
                                    perform well, they are going to quit. If you want to retain every single customer of
                                    yours,
                                    you will have to give them the attention they need. Frankly, there are so many of them.
                            </p>

                                    <p className="text-justify">You cannot employ one person for one customer. But with <b
                                        className="font-weight-bold">VisionAize’s</b> AI-based Customer
                                Retention, you can give customized attention to each customer without an extra
                                workforce,
                                at higher speed, and less error. There is always a question about the existing data.
                                However,
                                AI is fully capable of building its intelligence on your logistic regression model based
                                on
                                historical data. It will build itself according to the experience of your institution
                                and use it to
                                make future predictions.</p>

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
