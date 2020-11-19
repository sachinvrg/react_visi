/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../app/links';
export default class Solution extends Component {
    render() {
        return (
            <main>
                <div className="container">

                    {/* <!-- Section: Block Content --> */}
                    <section className="dark-grey-text py-5">

                        <h2 className="mb-5 wow fadeIn font-weight-bold text-center animated" data-wow-delay="0.2s"
                            style={{ visibility: "visible", animationName: "fadeIn", animationDelay: "0.2s" }}>
                            SOLUTIONS<span className="font-weight-light border-line"></span>
                        </h2>

                        <div className="row justify-content-center">

                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/Advanced Analytics.jpg" className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Enterprise} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">Enterprise Application Platform
                                    </p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/data_information.jpg" className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.SoftwareServices} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">Software as a Service (SaaS)
                                        Framework</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/bussinessb.jpg" className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.BusinessProcess} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">Business Process Automation
                                        Platform</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/realtimep.jpg" className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.RealTime} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">Real Time Processing Framework
                                    </p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="https://www.analyticsinsight.net/wp-content/uploads/2019/12/AI-for-Data-Management.jpg"
                                        className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.XmlData} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">XML Data Management Framework
                                    </p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="https://miro.medium.com/max/700/1*KzfbQ397hCn0pVUZMlksaQ.jpeg"
                                        className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.AiPowered} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">AI-Powered Marketing
                                        Intelligence</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/social.jpg" className="img-fluid obj_H200" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.SocialMedia} className="btn btn-outline-white btn-rounded">see more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">Social Media Intelligence</p>

                            </div>

                        </div>
                    </section>
                    {/* <!-- Section: Block Content --> */}


                </div>

            </main>
        )
    }
}
