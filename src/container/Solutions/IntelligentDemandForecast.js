/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'
export default class IntelligentDemandForecast extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Intelligent Demand Forecast
                                </h2>
                                    <div className="mb-4">
                                        <img src="img/svg/demand_prediction.svg" className="w-100 img-fluid" />
                                    </div>
                                    <p className="mt-4 text-justify">
                                        AI can be used for load forecasting. It can predict the demand-supply rates ahead of
                                        time. AI can help you with yield optimization. This is possible through real-time
                                        adjustments. Cameras and drones can be connected with air to achieve asset inspections.
                                    The conventional time-consuming method of assessment can be risky. </p>

                                    <p className="text-justify">The videos and data from the drone can be fed into AI algorithms to automatically
                                    recognize defects and predict failures without breaking the operation flow. Energy theft
                                    is a growing problem in many countries. AI can keep an eye on energy distribution
                                    patterns and data, payment history e, and other irregular behavior. Consumption insights
                                    can be used to compile and predict the need for any utility. Consolidation and
                                    classification of data are possible. Further, there are many types of sensors that can
                                    be optimized with the use of AI. Companies can get a holistic approach to their
                                    operations. </p>

                                    <p className="text-justify"><b className="font-weight-bold">VisionAize’s</b> AI can eliminate human error and prejudice
                                    that is natural in the case of a professional human inspector. AI does not have the
                                    drawback of human inspectors, such as fatigue. Its skills are regularly updated.
                                    Especially after the Corona Pandemic, AI is an important tool for the utility sector.
                                    This can also be used to make the dream of renewable energy a reality for many
                                    organisations. It will also help with waste reduction and management by removing
                                    inefficiency.</p>


                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.IntelligentDemandForecast} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Intelligent Demand Forecast</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
