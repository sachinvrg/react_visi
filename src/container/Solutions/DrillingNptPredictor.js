/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class DrillingNptPredictor extends Component {
    render() {
        return (
            <main>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Drilling/NPT predictor and analyzer
                                </h2>
                                    <div className="view overlay rounded mb-lg-0 mb-4">
                                        <img className="img-fluid m-auto" src="img/Images/oil_drilling.png" alt="Sample image" />
                                        <a>
                                            <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                        </a>
                                    </div>
                                    <p className="mt-4 text-justify">
                                        The drilling environment is becoming more challenging every day. The management of
                                        equivalent circulating density (ECD) is a key factor in minimizing the non-productive
                                        time (NPT). There can be many drilling obstacles such as stuck pipe, formation
                                        fracturing, and lost circulation that can hold the work back. The goal of using AI is to
                                        predict ECD before drilling by using a smart and efficient artificial neural network
                                        (ANN). It can comprehend the effect of each parameter affecting ECD, including the
                                        pressure exerted by the hydrostatic column resulting from the mud density, drilling
                                    fluid rheological properties, and pump flow rates.</p>

                                    <p className="text-justify">The biggest issue of the petroleum industry today is losing the drilling mud in the thief
                                    zones. It costs billions of dollars every year to stop and manage this issue. Today
                                    extended lengths, directional drilling, increased depth, and higher pressure and
                                    temperature are aspects changing the field of petroleum. These new capabilities have led
                                    to more ambitious objectives. However, it also brings new challenges. </p>

                                    <p><b className="font-weight-bold text-justify">VisionAize’s solutions</b> offer more control systems and
                                    operating models, sophisticated rigs, better collaboration with more, timely, and shared
                                    insight during operations. All these can be taken care of by using NLU. NLU can read
                                    data from completed wells. This new technology can allow domain experts to train the
                                    system. Users can give feedback, as well. It was not possible with previous programmatic
                                    approaches. AI can do the continuous streaming of data and structure it. Every data from
                                    drill rig to downhole sensors and logging can be collected and used for the future.
                                </p>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.DrillingNptPredictor} className="list-group-item list-group-item-action"> <i
                                        className="fas fa-check mr-2"></i> <span>Drilling/NPT Analyzer and Predictor</span></Link>
                                    <Link to={Links.IncidentAnalyzerPredictor} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Incident Analyzer & Predictor (Refinery &
                                        Pipeline</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
