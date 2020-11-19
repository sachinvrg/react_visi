/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// @import "~slick-carousel/slick/slick.css";
// @import "~slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Links } from '../app/links';
import Slider from 'react-slick-slider';
import $ from 'jquery';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
};
export default class Home extends Component {

    componentDidMount() {

        console.log(this.props.history.location.state)
        let idRoute = this.props.history ? this.props.history.location.state : false
        if (idRoute) {
            // idRoute = idRoute.slice(1)
            scroller.scrollTo(this.props.history && idRoute, {
                // smooth: true,
            })
        } else {
            scroll.scrollToTop();
        }


        // $(window).on('scroll', function () {
        //     var getsectionid = $('.leftSideNav a.active').attr('href').slice(1)

        //     if ($(window).scrollTop) {
        //         $('body').attr('class', '')
        //         $('body').addClass(getsectionid)
        //     } else {
        //         $('body').removeClass(getsectionid)

        //     }
        // });

        $('.leftSideNav a').each(function () {
            $(this).on('click', function () {
                $('.leftSideNav a').removeClass('active');
                $(this).addClass('active');
            });
        });

    }

    componentDidUpdate() {
        console.log(this.props.history.location.state)

        let idRoute = this.props.history ? this.props.history.location.state : false;
        if (idRoute) {
            // let sliceStr = idRoute.slice(1)
            scroller.scrollTo(idRoute, {
                // smooth: true,
            })
        } else {
            scroll.scrollToTop();
        }
    }

    render() {
        return (
            <main>
                <Element name="topsec" id="topsec" className="box-mainslide carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner" role="listbox" style={{ height: 'calc(100vh - 100px)' }}>
                        <div className="carousel-item active">
                            <div className="view overflow-hidden">
                                <div className="backgroundDrop"></div>
                                <img src="img/Images/03.png" className="d-block w-100" alt="..." />
                                <div className="container d-flex align-items-center justify-content-start mask text-left">
                                    <ul className="list-unstyled animated fadeInUp col-md-12">
                                        <li>
                                            <h1 className="display-3 mb-4 oswaldFont ">Building Intelligent Enterprises</h1>
                                            <p className="h5 mb-4">Accelerating the Digital and AI transformation journey for Competitive Advantage.</p>
                                        </li>
                                        <li>
                                            <Link to={Links.About + '#contactus'} className="btn btn-outline-primary btn-lg wow fadeIn"
                                                data-wow-delay="0.3s">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arrowdown ">
                        <Link to={{ pathname: Links.Home, state: 'ai_powered_solution' }}>
                            {/* <div className="mb-2">SCROLL DOWN</div> */}
                            <img src="img/svg/down-arrow.svg" alt="arrow-down" />
                        </Link>
                    </div>
                </Element>
                <Element name="ai_powered_solution">
                    <section id="ai_powered_solution" className="section feature-box aipower wow fadeIn" data-wow-delay="0.2s">
                        <div className="row w-100">
                            <div className="container py-3">
                                {/*Section heading*/}
                                <h2 className="title my-5 wow fadeIn font-weight-bold animated text-center" data-wow-delay="0.2s"
                                    style={{ visibility: ' visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    OUR AI POWERED<span className="font-weight-light border-line"> SOLUTIONS</span>
                                </h2>
                                <h5 className="w-responsive mx-auto mb-5 wow fadeIn animated text-center" data-wow-delay="0.2s"
                                    style={{ visibility: ' visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    We Empower Organisations To Be an AI Company
                            </h5>
                                {/*Grid row*/}
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="industry-tab" data-toggle="tab" href="#industry" role="tab" aria-controls="industry"
                                            aria-selected="true">Industries</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="functions-tab" data-toggle="tab" href="#functions" role="tab" aria-controls="functions"
                                            aria-selected="false">Functions</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="industry" role="tabpanel" aria-labelledby="industry-tab">
                                        <div className="row py-5 justify-content-center">
                                            {/* <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/Manufacturing.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Manufacturing</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div> */}
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/truck.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Transportation & Logistics</h4>
                                                    <Link to={Links.TranspAndLogistic} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/medicine.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Healthcare & Pharma</h4>
                                                    <Link to={Links.Healthcare} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/pay.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Banking & Insurance</h4>
                                                    <Link to={Links.Banking} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/oil-industry.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Oil & Gas</h4>
                                                    <Link to={Links.Oilgas} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/sprout.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Environment</h4>
                                                    <Link to={Links.Environmental} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/technical-support.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Utilities</h4>
                                                    <Link to={Links.Utility} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/technology.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Hi-Tech</h4>
                                                    <Link to={Links.Hightech} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/helicopter.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Travel & Hospitality</h4>
                                                    <Link to="javascript:void(0);" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/it_ites.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">IT & ITES</h4>
                                                    <Link to="javascript:void(0);" className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/retail.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Retail</h4>
                                                    <Link to={Links.Retail} className="stretched-link" ></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="functions" role="tabpanel" aria-labelledby="functions-tab">
                                        <div className="row py-5 justify-content-center">
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/digital-marketing.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Marketing</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/hr.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Human Resource</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/money.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Finance</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/safety.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Safety & Security</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div>

                                            {/* <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/supply-chain.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Supply Chain</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-lg-3 mb-5">
                                                <div className="fancyBox text-center">
                                                    <img src="img/svg/engineering.svg" className="boxicon" />
                                                    <h4 className="font-weight-bold">Engineering</h4>
                                                    <Link to={Links.About + '#contactus'} className="stretched-link"></Link>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Element>
                <Element name="features">
                    <section id="features" className="section yellowsection feature-box text-center py-5">
                        <div className="container">
                            {/* Section heading */}
                            <h2 className="title my-5 wow fadeIn  font-weight-bold text-white" data-wow-delay="0.2s">
                                ACCELERATE DIGITAL <span
                                    className="font-weight-light border-line-white text-white"> TRANSFORMATION</span>
                            </h2>

                            {/* Section sescription */}
                            <h5 className="w-responsive mx-auto mb-3 wow text-white fadeIn" data-wow-delay="0.2s">
                                Helping Customers in their Data Driven Digital Transformations</h5>

                            {/*Grid row*/}
                            <div className="row features wow fadeIn justify-content-center my-5 pt-5" data-wow-delay="0.2s">
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/automation.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Process Automation

                                    </h5>
                                        <p className="text-white">Streamline and digitize processes for greater efficiency.
                                    </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/cloud-service.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Cloud Services
                                    </h5>
                                        <p className="text-white">Helps organisations to enhance customer experience.
                                    </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/context.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Data Management


                                    </h5>
                                        <p className="text-white">Comprehensive data and information management services.
                                    </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/001-workflow.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Data Engineering
                                    </h5>
                                        <p className="text-white">Pivot your data and visualize results to drive smarter decisions.

                                    </p>
                                    </div>
                                </a>
                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/big-data.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Big Data Analytics


                                    </h5>
                                        <p className="text-white">Glean actionable insights from your organisation's data.
                                    </p>
                                    </div>
                                </a>

                                <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                    <div className="icon-area">
                                        <div>
                                            <img src="img/svg/analytics.svg" height="50px" />
                                        </div>
                                        <br />
                                        <h5 className="mt-2 font-weight-bold text-white">Advanced Analytics and AI
                                    </h5>
                                        <p className="text-white">Improve decision-making at every level through advanced analytics.
                                    </p>
                                    </div>
                                </a>

                                {/* <a href="#" className="col-lg-4 text-center hoverable p-4 mb-3">
                                <div className="icon-area">
                                    <div>
                                        <img src="img/svg/data-warehouse.svg" height="50px"/>
                                    </div>
                                    <br/>
                                    <h5 className="mt-2 font-weight-bold text-white">Data Warehouse Modernization
                                    </h5>
                                    <p className="text-white">Upgrade your data warehouse with our expert services and support.
                                    </p>
                                </div>
                            </a> */}

                            </div>
                            {/*/First row*/}
                        </div>
                    </section>
                </Element>
                <Element name="clients">
                    <section id="clients" className="box-partner position-relative">
                        <img src="img/Images/worldmap.jpg" className="worldmap" style={{ width: '100%' }} />

                        <div className="container">

                            {/*First row*/}
                            <div className="row justify-content-center">

                                <div className="col-md-12 flex-center">
                                    <h2 className="my-5 wow fadeIn font-weight-bold text-center text-white" data-wow-delay="0.2s"
                                        style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                        OUR GLOBAL<span className="font-weight-light border-line-white text-white"> CLIENTS</span>
                                    </h2>
                                </div>
                            </div>
                            {/*/First row*/}
                            <Slider {...settings} className="col-12 regular responsive slider">
                                <div>
                                    <img src="img/client/tibco.png" />
                                </div>
                                <div>
                                    <img src="img/client/talend.png" />
                                </div>
                                <div>
                                    <img src="img/client/salesforce.png" />
                                </div>
                                <div>
                                    <img src="img/client/stitch-fix.png" />
                                </div>
                                <div>
                                    <img src="img/client/adobe.png" />
                                </div>
                                <div>
                                    <img src="img/client/riverbed.png" />
                                </div>
                                <div>
                                    <img src="img/client/Masterclass.png" />
                                </div>
                                <div>
                                    <img src="img/client/Varo Money.png" />
                                </div>
                                <div>
                                    <img src="img/client/barclays.png" />
                                </div>
                                <div>
                                    <img src="img/client/docker.png" />
                                </div>
                                <div>
                                    <img src="img/client/lendinghome_logo.png" />
                                </div>
                                <div>
                                    <img src="img/client/firstrepublic.png" />
                                </div>
                                <div>
                                    <img src="img/client/BNP Paribas.jfif" />
                                </div>
                                <div>
                                    <img src="img/client/vmware.png" />
                                </div>
                                <div>
                                    <img src="img/client/Pfizer.png" />
                                </div>
                                <div>
                                    <img src="img/client/university_logo.png" />
                                </div>
                            </Slider>
                        </div>

                    </section>
                </Element>
            </main>
        )
    }
}
