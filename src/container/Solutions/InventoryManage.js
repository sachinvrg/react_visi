/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class InventoryManage extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">

                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Inventory Management <span className="font-weight-light"></span>
                                    </h2>
                                    <div className="mb-4">
                                        <img className="img-fluid" src="img/svg/inventory_management.svg" className="w-100 img-fluid" />

                                    </div>
                                    <p className="mt-4 text-justify">There are many problems in Inventory Management like Excess inventory
                                    stocked up in
                                    warehouses holding millions of dollars in working capital, stock shortages, cut up
                                    margins and lowered brand image, hefty penalties from buyers if the suppliers can't meet
                                    standards in services. Artificial intelligence in inventory is very profitable and leads
                                    to vast and impressive improvements in the companies' revenue using it. </p>

                                    <p className="text-justify">There is going to be a paradigm shift in the ways the inventory is managed. This change
                                    is due to the availability of huge amounts of real-time data and resources. These
                                    datasets are routinely generated on the internet, with the interconnected world of
                                    software systems in enterprises and smart products. If you want to make effective use of
                                    this new data, AI is your only tool. It is crucial to stay competitive, and the managers
                                    need to design new models of their supply-chain processes. </p>

                                    <p className="text-justify"><b className="font-weight-bold">VisonAize’s</b> AI methods, including time series prediction,
                                    reinforcement learning systems, User demand data, supplier backorders data, warehouse
                                    optimization processes, stock levels organisation, and arrangements, can all be guided
                                    by artificial intelligence systems. Companies bringing artificial intelligence into
                                    their Supply Chain are seeing a huge improvement. AI can make inventory management
                                    homogenous. It can predict the future needs of demand and help you prepare your
                                    inventory to handle the market demand variations.
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
