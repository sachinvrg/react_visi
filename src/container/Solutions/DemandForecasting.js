/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class DemandForecasting extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Demand Forecasting <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mb-4">
                                        <img src="img/svg/demand_forecasting.svg" className="img-fluid w-100" />
                                    </div>
                                    <p className="text-justify"><b className="font-weight-bold">VisionAize’s</b> Demand Forecasting solutions are one of the
                                    promising applications for the supply chain. Through model training technology analysis
                                    has become one of the crucial part to understand the complex relationships and factors
                                    which influence the product demands. </p>

                                    <p className="text-justify">Machine learning based forecasting can help customer engagements and address the various
                                    challenges to improve the supply chain efficiency. Through this large no. of data can be
                                    analyzed with various factors simultaneously. By accurately analyzing past and current
                                    performances, AI-enabled processes can continuously refine and improve the demand
                                forecasting process. </p>

                                    <p className="text-justify">According to Mckinsey Digital,AI enabled tech can reduce errors by 35-50% in supply
                                    chain networks. AI connects relevant data for highly accurate demand forecasting which can
                                    leads up to 65% reduction in loss in sales and decrease warehouse cost upto 40%.
                                </p>
                                    <h4 className="title my-5 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                        style={{ visibility: "visible", animationName: 'fadeIn', animationDelay: '0.2s' }}>VisionAize
                                        AI based demand forecasting solutions can play a key role in,
                                </h4>
                                    <p>
                                        <ul className="list-group list-group-flush py-3">
                                            <li className="list-group-item"><span className="pr-4"><i
                                                className="fas fa-check"></i></span>Improves Customer satisfaction</li>
                                            <li className="list-group-item"><span className="pr-4"><i
                                                className="fas fa-check"></i></span>Greater Optimization in retail business</li>
                                            <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Better
                                            manpower planning</li>
                                            <li className="list-group-item"><span className="pr-4"><i
                                                className="fas fa-check"></i></span>Overall Efficiency</li>
                                        </ul>
                                    </p>
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
