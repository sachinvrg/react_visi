/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class ConversationalSupport extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">

                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Conversational Support <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="=mb-4">
                                        <img className="img-fluid w-100" src="img/svg/conversational_support.svg"
                                            alt="Sample image" />
                                    </div>
                                    <p className="mt-4 text-justify">In the current scenario of increased internet marketing and online shopping,
                                    retail enterprises are increasingly employing AI in data processing. It is an emerging
                                    technology that optimizes customer experience both online and offline. A recent study
                                    found that sales from physical shops and outlets are responsible for around 50% of
                                    transactions. In comparison, online-only retailers are responsible for a small 10% of
                                    transactions. So clearly, the optimization between online and offline worlds is crucial.
                            </p>

                                    <p className="text-justify"><b className="font-weight-bold">VisionAize’s</b> AI solutions can help retailers to strike
                                the perfect balance. Retailers need Speed, Convenience, Automation, and Immersion. These
                                four pillars are the core of every retail business, and they can be made strong through
                                AI-based deep learning algorithms that can create an intelligent experience. Further,
                                the geographical barrier should not hold you back.
                            </p>

                                    <p className="text-justify">There is a need for the ability to field customer queries from across time-zones.
                                    Retailers need to respond to positive questions and potentially lead immediately. AI
                                    facilitates this 24×7 accessibility of retail to customers through chatbots, automated
                                    emails, and voice assistants. Customers can reach out to the retailers to resolve issues
                                    anytime and anyplace regarding their product and services queries without having to wait
                                    for an agent to respond after a long-time or be restricted by a contact center's office
                                hours.</p>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.InventoryManage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Inventory Management</span></Link>
                                    <Link to={Links.AdaptiveHomepage} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Adaptive homepage</span></Link>
                                    <Link to={Links.ConversationalSupport} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Conversational Support</span></Link>
                                    <Link to={Links.DemandForecasting} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Demand Forecasting</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
