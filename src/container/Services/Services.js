/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class Services extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <section className="text-center py-5">
                        <h2 className="title mb-5 wow fadeIn font-weight-bold text-center" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Services<span className="font-weight-light border-line-white text-white"></span>
                        </h2>
                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/Advanced Analytics.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.AdvancedAnalyticsAi} className="btn btn-outline-white btn-rounded">see
                                    more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">ADVANCED ANALYTICS & AI</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/data_information.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.DataInformation} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">DATA & INFORMATION MANAGEMENT
                        </p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/data.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.DataEngineering} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">DATA ENGINEERING &
                            VISUALIZATION</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/data_l.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.DataLake} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">DATA LAKE MODERNIZATION</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/process.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.ProcessAutomation} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">PROCESS AUTOMATION</p>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/cloud.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Cloud} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">CLOUD</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
