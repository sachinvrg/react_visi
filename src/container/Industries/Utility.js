/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Utility extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Utility
                            </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/utility.svg" className="img-fluid" height="400" />
                                    </div>
                                    <p className="text-justify"><b className="font-weight-bold">VisionAize</b> has impactful solutions for the utility
                                industry where AIML are playing key
                                roles on many aspects of the business. Most of the Power companies are turning on for AI
                                solutions to improve their electricity delivery channels for better, easy, fast and cost
                                effective solutions. </p>
                                    <p className="text-justify">Through advanced AI solutionis, data analysis, manufacturing, consumptions, energy
                                    savings has become a real advantage in Utility sectors. AIML algorithms are rapidly
                                redefining how utility companies manage their electric infrastructure.</p>
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
