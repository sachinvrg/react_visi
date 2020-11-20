/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Industries extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <section className="text-center py-5">
                        <h2 className="title mb-5 wow fadeIn font-weight-bold text-center" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Industries<span className="font-weight-light border-line-white text-white"></span>
                        </h2>
                        {/* First row */}
                        <div className="row justify-content-center category_gallery">
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="view overlay z-depth-1">
                                    <img src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                        className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Healthcare}
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">HEALTHCARE</p>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Banking}
                                            // bankingto
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">BANKING & FINANCIAL</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/images/retail.jpg"
                                        className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Retail}
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0">RETAIL</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay">
                                    <img src="img/Images/oil_drilling.png" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Oilgas}
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0 text-uppercase">Oil & Gas</p>

                            </div>

                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/software.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Hightech}
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0 text-uppercase">HIGH-TECH</p>

                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="view overlay z-depth-1">
                                    <img src="img/Images/oilgas2.jpg" className="img-fluid" alt="Sample image" />
                                    <div className="mask flex-center blue-gradient-rgba">
                                        <Link to={Links.Utility}
                                            className="btn btn-outline-white btn-rounded waves-effect waves-light">see
                                                more</Link>
                                    </div>
                                </div>
                                <p className="text-uppercase text-center font-weight-bold mt-4 mb-0 text-uppercase">UTILITY</p>
                            </div>
                        </div>
                        {/* First row */}
                    </section>
                </div>
                {/* Streak */}
            </main>
        )
    }
}
