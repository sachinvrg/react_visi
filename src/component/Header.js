/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Links } from '../app/links'
import Wrapper from './Wrapper'
import { WrapperData } from './WrapperData'

class Header extends Component {
    getKey(object, value) {
        console.log(value)
        let obj = WrapperData[Object.keys(object).find(key => object[key] === value)]
        // let bannerImgL = obj.bannerImgL,
        // description = obj.description,
        // heading = obj.heading,
        // Controls = obj.Controls?obj.Controls:false
        // console.log(bannerImgL,description,heading,Controls)
        return obj

    }


    render() {
        return (
            <>
                {(this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/") && <div className="leftSideNav" id="navbar_spy">
                    <Link className="nav-link" to={Links.Home}><span>Home</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: 'ai_powered_solution' }}><span>AI Powered<br />Solutions</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: "features" }}><span>Digital<br />Transformation</span></Link>
                    <Link className="nav-link" to={{ pathname: Links.Home, state: "clients" }}><span>Clients</span></Link>
                </div>}
                <header id="scrollPage">
                    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                        <div className="container-fluid align-items-center">
                            <Link className="navbar-brand title" to="home"></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <img src="img/svg/menu.svg" height="25" />
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="list-unstyled navbar-nav ml-auto">
                                    <li className="nav-item ml-4">
                                        <Link className="nav-link title" to={Links.Home} data-offset="90">Home</Link>
                                    </li>
                                    {/* <li className="nav-item ml-4 dropdown dropdown-8 d-none">
                                        <Link className="nav-link title" to={Links.Industries} data-offset="90">Industries</Link>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-2"><Link className="tablink waves-effect waves-light"
                                                to={Links.Banking}>BANKING & FINANCIAL</Link></li>
                                            <li className="dropdown_item-1"><Link className="tablink waves-effect waves-light"
                                                to={Links.Healthcare}>HEALTHCARE & PHRAMA</Link></li>
                                            <li className="dropdown_item-4"><Link className="tablink waves-effect waves-light"
                                                to={Links.Hightech}>HIGH-TECH</Link></li>
                                            <li className="dropdown_item-4"><Link className="tablink waves-effect waves-light"
                                                to={Links.Retail}>RETAIL</Link></li>
                                            <li className="dropdown_item-4"><Link className="tablink waves-effect waves-light"
                                                to={Links.Oilgas}>OIL & GAS</Link></li>
                                            <li className="dropdown_item-4"><Link className="tablink waves-effect waves-light"
                                                to={Links.Utility}>UTILITY</Link></li>
                                            <li className="dropdown_item-4"><Link className="tablink waves-effect waves-light"
                                                to={Links.TranspAndLogistic}>Transportation & Logistics</Link></li>
                                            <li className="dropdown_item-4">
                                                <Link className="tablink waves-effect waves-light"
                                                    to={Links.Environmental}>Environmental</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item ml-4 dropdown dropdown-8">
                                        <Link className="nav-link title" to="javascript:void(0)" data-offset="90">Industries</Link>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                className="tablink waves-effect waves-light" to={Links.Banking}>BANKING &
                                                FINANCIAL</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.ImprovedRustomerRetention}>Improved customer retention</Link>
                                                    </li>
                                                    <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                        to={Links.Chatbots}>Chatbots</Link></li>
                                                    <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                        to={Links.CustomizedInvestments}>Customized Investments</Link></li>
                                                    <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                        to={Links.LifeTimeValuePrediction}>Life Time Value Prediction</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <Link
                                                    className="tablink waves-effect waves-light" to={Links.Healthcare}>HEALTHCARE &
                                                PHRAMA</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.ClaimsPredictions}>Claims (Fraud & Rejection) Prediction</Link>
                                                    </li>
                                                    <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                        to={Links.FludemicPrediction}>Fludemic (Data Driven Health)
                                                        Prediction</Link></li>
                                                    <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                        to={Links.DrugRecovery}>Drug Recovery</Link></li>
                                                    <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                        to={Links.RiskProfileAnalyzer}>Risk Profile Analyzer using
                                                        Genomics</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                className="tablink waves-effect waves-light" to={Links.Hightech}>HIGH-TECH</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.SmartRiskPredictorAgileProcess}>Smart Risk Predictor for
                                                        Agile Process</Link></li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.SuccessThroughSprints}>Success through Sprints</Link></li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.ImprovementThroughDeepLearning}>Improvement through deep
                                                        learning</Link></li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.BusinessModelMakeover}>The business model makeover</Link></li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.StayingAheadCurveWith}>Staying ahead of the curve with
                                                        AI</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <Link className="tablink waves-effect waves-light" to={Links.Retail}>RETAIL</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2">
                                                        <Link className="waves-effect waves-light"
                                                            to={Links.InventoryManage}>Inventory Management</Link>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <Link className="waves-effect waves-light"
                                                            to={Links.AdaptiveHomepage}>Adaptive homepage</Link>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <Link className="waves-effect waves-light"
                                                            to={Links.ConversationalSupport}>Conversational Support</Link>
                                                    </li>
                                                    <li className="dropdown_item-2">
                                                        <Link className="waves-effect waves-light"
                                                            to={Links.DemandForecasting}>Demand Forecasting</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <Link className="tablink waves-effect waves-light" to="oilgas">OIL & GAS</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.DrillingNptPredictor}>Drilling/NPT Analyzer &
                                                        Predictor</Link></li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.IncidentAnalyzerPredictor}>Incident Analyzer & Predictor
                                                        (Refinery & Pipeline)</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                className="tablink waves-effect waves-light" to={Links.Utility}>UTILITY</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.IntelligentDemandForecast}>Intelligent Demand Forecast</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                className="tablink waves-effect waves-light"
                                                to={Links.TranspAndLogistic}>Transportation & Logistics</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.TranspPlatform}>Transport Platform</Link>
                                                    </li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.PandemicCrowdControl}>Pandemic Crowd Control App</Link>
                                                    </li>
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.PredictiveMaintenance}>Predictive Maintenance</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                className="tablink waves-effect waves-light"
                                                to={Links.Environmental}>Environment</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                    <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                        to={Links.AirPollutionMonitoringPrediction}>Air Pollution Monitoring
                                                        & Prediction</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}


                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <Link className="nav-link title" to="javascript:void(0)" data-offset="90">Industries</Link>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <Link className="tablink waves-effect waves-light" to={Links.Banking}>Domain</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Banking}>BANKING &
                                                FINANCIAL</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.ImprovedRustomerRetention}>Improved customer retention</Link>
                                                            </li>
                                                            <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                                to={Links.Chatbots}>Chatbots</Link></li>
                                                            <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                                to={Links.CustomizedInvestments}>Customized Investments</Link></li>
                                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                                to={Links.LifeTimeValuePrediction}>Life Time Value Prediction</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <Link
                                                            className="tablink waves-effect waves-light" to={Links.Healthcare}>HEALTHCARE &
                                                PHRAMA</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.ClaimsPredictions}>Claims (Fraud & Rejection) Prediction</Link>
                                                            </li>
                                                            <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                                to={Links.FludemicPrediction}>Fludemic (Data Driven Health)
                                                        Prediction</Link></li>
                                                            <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                                to={Links.DrugRecovery}>Drug Recovery</Link></li>
                                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                                to={Links.RiskProfileAnalyzer}>Risk Profile Analyzer using
                                                        Genomics</Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Hightech}>HIGH-TECH</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.SmartRiskPredictorAgileProcess}>Smart Risk Predictor for
                                                        Agile Process</Link></li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.SuccessThroughSprints}>Success through Sprints</Link></li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.ImprovementThroughDeepLearning}>Improvement through deep
                                                        learning</Link></li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.BusinessModelMakeover}>The business model makeover</Link></li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.StayingAheadCurveWith}>Staying ahead of the curve with
                                                        AI</Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <Link className="tablink waves-effect waves-light" to={Links.Retail}>RETAIL</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2">
                                                                <Link className="waves-effect waves-light"
                                                                    to={Links.InventoryManage}>Inventory Management</Link>
                                                            </li>
                                                            <li className="dropdown_item-2">
                                                                <Link className="waves-effect waves-light"
                                                                    to={Links.AdaptiveHomepage}>Adaptive homepage</Link>
                                                            </li>
                                                            <li className="dropdown_item-2">
                                                                <Link className="waves-effect waves-light"
                                                                    to={Links.ConversationalSupport}>Conversational Support</Link>
                                                            </li>
                                                            <li className="dropdown_item-2">
                                                                <Link className="waves-effect waves-light"
                                                                    to={Links.DemandForecasting}>Demand Forecasting</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8">
                                                        <Link className="tablink waves-effect waves-light" to="oilgas">OIL & GAS</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.DrillingNptPredictor}>Drilling/NPT Analyzer &
                                                        Predictor</Link></li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.IncidentAnalyzerPredictor}>Incident Analyzer & Predictor
                                                        (Refinery & Pipeline)</Link></li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Utility}>UTILITY</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.IntelligentDemandForecast}>Intelligent Demand Forecast</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light"
                                                        to={Links.TranspAndLogistic}>Transportation & Logistics</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.TranspPlatform}>Transport Platform</Link>
                                                            </li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.PandemicCrowdControl}>Pandemic Crowd Control App</Link>
                                                            </li>
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.PredictiveMaintenance}>Predictive Maintenance</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light"
                                                        to={Links.Environmental}>Environment</Link>
                                                        {/* <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-7">
                                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                                to={Links.AirPollutionMonitoringPrediction}>Air Pollution Monitoring
                                                        & Prediction</Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light"
                                                        to={TravelHospitality}>Travel and Hospitality</Link>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light"
                                                        to={Links.ItItes}>IT & ITES</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown_item-1 dropdown dropdown-8">
                                                <Link className="tablink waves-effect waves-light" to={Links.Banking}>Functions</Link>
                                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Banking}>Marketing</Link>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Banking}>Human Resource</Link>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Banking}>Finance</Link>
                                                    </li>
                                                    <li className="dropdown_item-1 dropdown dropdown-8"><Link
                                                        className="tablink waves-effect waves-light" to={Links.Banking}>Safety & Security</Link>
                                                    </li>

                                                </ul>
                                            </li>


                                        </ul>
                                    </li>

                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <Link className="nav-link title" to={Links.Solution} data-offset="90">Solutions</Link>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1"><Link className="waves-effect waves-light"
                                                to="enterprise">Enterprise Application Platform</Link></li>
                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                to="/software-services">Software as a Service (SaaS) Framework</Link></li>
                                            <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                to="/business-process">Business Process Automation Platform</Link></li>
                                            <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                to="/real-time">Real Time Processing Framework</Link></li>
                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light" to="/xml-data">XML
                                                Data Management Framework</Link></li>
                                            <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                to="/ai-powered">AI-Powered Marketing Intelligence</Link></li>
                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                to="/social-media">Social Media Intelligence</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ml-4 dropdown dropdown-8">
                                        <Link className="nav-link title" to={Links.Services} data-offset="90">Services</Link>
                                        <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-8">
                                            <li className="dropdown_item-1"><Link className="waves-effect waves-light"
                                                to={Links.AdvancedAnalyticsAi}>Advanced Analytics & AI</Link></li>
                                            <li className="dropdown_item-2"><Link className="waves-effect waves-light"
                                                to={Links.DataInformation}>Data & Information Management</Link></li>
                                            <li className="dropdown_item-3"><Link className="waves-effect waves-light"
                                                to={Links.DataEngineering}>Data Engineering & Visualization</Link></li>
                                            <li className="dropdown_item-4"><Link className="waves-effect waves-light"
                                                to={Links.DataLake}>Data Lake Modernization</Link></li>
                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                to={Links.ProcessAutomation}>Process Automation</Link></li>
                                            <li className="dropdown_item-5"><Link className="waves-effect waves-light"
                                                to={Links.Cloud}>Cloud</Link></li>
                                        </ul>
                                    </li>


                                    <li className="nav-item ml-4">
                                        <Link className="nav-link title" to={Links.About} data-offset="90">About Us</Link>
                                    </li>
                                </ul>
                                {/* <ul className="navbar-nav nav-flex-icons mt-2">
                                    <li className="nav-item ml-3">
                                        <span className="openSearch">
                                            <i className="fas fa-search blue-text"></i>
                                        </span>

                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </nav>
                    <div className="searchSection">
                        <span className="closeIt openSearch">
                            <svg height="30" viewBox="0 0 311 311.07733" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                                <path
                                    d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                            </svg>
                        </span>
                        <div className="form-group">
                            <h6 className="display-6">Search...</h6>
                            <input type="text" placeholder="Search" className="searchfld" />
                        </div>
                    </div>
                    <Wrapper getKey={this.getKey(Links, this.props.history.location.pathname)} />
                </header>
            </>
        )
    }
}
export default withRouter(Header)