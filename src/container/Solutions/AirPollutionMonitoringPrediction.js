import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links'

export default class AirPollutionMonitoringPrediction extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Air Pollution Monitoring and Prediction
                                    </h2>
                                    <div className="mb-4 text-center">
                                        <img src="img/svg/pollution_moniter.svg" className="w-100" />
                                    </div>
                                    <p className="text-justify">Air pollution is a major issue that is faced by the earth today and is in concern of all
                                    the country's government in the
                                    present date. The risks to biodiversity and life form due to the same is intense, and all
                                    the efforts are being taken by
                                    the government with the assistance of the environment industry to counter the same.
                                    </p>
                                    <p className="text-justify">Air pollution is monitored and predicted using the IoT or Internet of Things. The term
                                    refers to actions that are taken
                                    by a computer device or an advanced machine or artificial intelligence that can identify
                                        unique information.</p>
                                    <p className="text-justify">The IoT used in air pollution monitoring tests the air quality of a particular area and
                                    displays the level of pollution
                                    in the area. It also collects data regarding the same to predict the quality of air that
                                    will be in the area being
                                    measured. This is made possible due to a machine learning algorithm that allows the
                                    system’s intelligence to calculate
                                        the future levels based on present and past data collection.</p>
                                    <p className="text-justify">Another means of the same is Geographical Information Systems or GIS. GIS is a
                                    computer-based application. It is used in
                                    mapping and examination of earth and the phenomenal changes happening. These are used to
                                    measure the air quality of a
                                    place to manage the pollution levels. GIS systems have statistical data and use
                                    intelligence to analyze the data in
                                        predicting future changes in the air quality due to climatic change.</p>
                                    <p className="text-justify">Industries largely used devices like this in their production facilities. Such devices
                                    are used to control the pollution
                                    emission that the industries have been doing. It comes as a small part of the industry's
                                    sustainable development and
                                    social responsibility to install air pollution monitoring and prediction devices.
                                    Factories install the devices to
                                    monitor and predict the pollution level that is and is about to be emitted from the
                                    factory. It is then used by the
                                        company to plan on the CSR that they need to do accordingly.</p>
                                    <p className="text-justify">It is very clear how important air pollution monitoring and prediction devices are
                                    regarding the present-day
                                    environment situation. The devices are an effort to hopefully reduce the pollution
                                        level.</p>
                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.AirPollutionMonitoringPrediction}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Air Pollution Monitoring and
                                            Prediction</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
