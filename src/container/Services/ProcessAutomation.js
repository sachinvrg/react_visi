/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';

export default class ProcessAutomation extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <p className="pt-5">
                        Enterprises need to digitalize their business capabilities and processes to step up their game for the
                        future. Digitalization efforts necessitate the adoption of technologies for analytics, automation and
                        integration, as well as the development of data enabling transparency and sharing applications.
                        Selectively identifying legacy systems while introducing new digital layers will enable desired levels
                        of scalability and flexibility. Digitalization of business processes and capabilities is not the new
                        name for IT application modernization. It is the method of process dis-intermediation which requires a
                        well-defined design approach. Digitalization is vital for organisations to change business models and
                        gain a competitive advantage by doing things faster, better and more cost-effectively than the
                        competition.
                </p>
                    <hr />
                    <section className="pb-5">
                        <h4 className="title my-4 wow fadeIn font-weight-bold text-uppercase text-center data-wow-delay="
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Steps for Successful Digitalization
                    </h4>
                        <p>
                            The most commonly observed flaw is when the plethora of point technology solutions make enterprises
                            start from ‘step 3’ without a proper understanding of steps 1 and step 2.
                    </p>
                    </section>
                </div>
                {/*Section: Features v.4*/}
                <section className="section blue wow fadeIn" data-wow-delay="0.2s"
                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                    <div className="container">
                        {/*Section heading*/}
                        <h2 className="py-5 white-text font-weight-bold text-center wow fadeIn text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Our Offerings</h2>
                        <p className="text-center white-text pb-5">
                            Our consulting team brings deep domain and technological expertise to support digitalization
                            efforts. We recommend future architecture and help companies get maximum value from their existing
                            business and IT capabilities.
                    </p>
                        {/*Grid row*/}
                        <div className="row">

                            {/*Grid column*/}
                            <div className="col-md-12 col-lg-6">

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-search-plus blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Discovery & Capability Maturity
                                        Assessment</h4>
                                        <p className="white-text">Provides a detailed understanding of your current capabilities’
                                        footprint and business processes, enabling us to develop business use cases around
                                        digital transformations.</p>
                                    </div>
                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-comment-alt blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Architecture Consulting</h4>
                                        <p className="white-text">Enhances your functionality, making it easier to maintain as part
                                        of a highly-scalable framework.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-object-group blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">
                                            Platform Design</h4>
                                        <p className="white-text">Assess process gaps and identify processes for elimination,
                                        redesign or reengineering. Followed by platform architecture design to drive
                                        flexibility, reuse and scalability.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-map blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Migration Roadmap</h4>
                                        <p className="white-text">Build a migration roadmap for your capabilities and systems to
                                        deliver simplification, automation, integration and high supportability with minimal
                                        impact or disruption of business.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}

                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-md-12 col-lg-6">

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-chart-bar blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Business Process Analysis</h4>
                                        <p className="white-text">Analysis of as-is business processes with a view to improve
                                        efficiency and effectiveness of operations and arrive as to-be processes.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-shield-alt blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">
                                            Process/Policy Impact Assessment</h4>
                                        <p className="white-text">Performing impact assessments of changing processes and policies
                                        in order to provide technology deployment recommendations.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-network-wired blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Capability Framework Creation</h4>
                                        <p className="white-text">Cataloging world-class capability-specific view to a business
                                        function’s domain and type of business.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <a type="button" className="btn-floating white btn-lg my-0 waves-effect waves-light">
                                            <i className="fas fa-snowflake blue-text" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title white-text font-weight-bold">Capability Assessment Servicesn
                                    </h4>
                                        <p className="white-text">Cataloging existing capabilities and mapping them to underlying or
                                        evolving business processes and world-class capability view to understand gaps. This
                                        leads to realization of new capabilities needed in today’s dynamic business
                                        landscape.
                                    </p>
                                    </div>
                                </div>
                                {/*Grid row*/}


                            </div>
                            {/*Grid column*/}

                        </div>
                        {/*Grid row*/}
                    </div>
                </section>
                {/*/Section: Features v.4*/}

                {/*Section: Features v.4*/}
                <section className="section wow fadeIn" data-wow-delay="0.2s"
                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                    <div className="container">
                        {/*Section heading*/}
                        <h2 className="title my-5 pb-5 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            Workflow<span className="font-weight-light border-line"> Automation</span>
                        </h2>
                        {/*Grid row*/}
                        <div className="row">

                            {/*Grid column*/}
                            <div className="col-md-12 col-lg-6">

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <span className="my-0 waves-effect waves-light">
                                            <img src="img/svg/001-intelligence.svg" width="70px" />
                                        </span>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title font-weight-bold">Intelligent Process Automation
                                    </h4>
                                        <p className="">VisionAIze’s IPA solutions make your processes smarter. Our
                                        solutions not only elevate workforce productivity by automating mundane tasks, but
                                        also end-to-end business operations. Integrating robotic process automation with
                                        machine learning and cognitive technologies to generate intelligent operations, we
                                        provide IPA solutions that accelerate productivity.</p>
                                        <Link to={Links.Solution}
                                            className="btn btn-outline-dark btn-md wow fadeIn waves-effect waves-light animated"
                                            data-wow-delay="0.3s"
                                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>Read
                                        more</Link>
                                    </div>
                                </div>
                                {/*Grid row*/}

                            </div>
                            {/*Grid column*/}

                            {/*Grid column*/}
                            <div className="col-md-12 col-lg-6">

                                {/*Grid row*/}
                                <div className="row mb-5">
                                    <div className="col-2">
                                        <span className="my-0 waves-effect waves-light">
                                            <img src="img/svg/001-robotics.svg" width="60px" />
                                        </span>
                                    </div>
                                    <div className="col-9 pl-5">
                                        <h4 className="feature-title font-weight-bold">
                                            Robotic Process Automation</h4>
                                        <p className="">VisionAIze’s Robotic Process Automation (RPA), together with a
                                        unique continuous improvement methodology, simplifies routine and repetitive
                                        processes for clients. This involves automating labor-intensive and error-prone back
                                        office tasks like data entry, account creation and data processing.
                                    </p>
                                        <Link to={Links.Solution}
                                            className="btn btn-outline-dark btn-md wow fadeIn waves-effect waves-light animated"
                                            data-wow-delay="0.3s"
                                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>Read
                                        more</Link>
                                    </div>
                                </div>
                                {/*Grid row*/}
                            </div>
                            {/*Grid column*/}

                        </div>
                        {/*Grid row*/}
                        <hr />
                    </div>
                </section>
                {/*/Section: Features v.4*/}
                <div className="container pt-5">
                    <section className="p-md-3 text-lg-left">
                        <div className="row d-flex justify-content-center">
                            <h2 className="title pb-5 wow fadeIn font-weight-bold text-center text-uppercase" data-wow-delay="0.2s"
                                style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                Our Domain
                           <span className="font-weight-light border-line"> Focus</span>
                            </h2>
                        </div>
                        <div className="row text-center d-flex justify-content-center mt-4">
                            <div className="col-lg-6 col-md-6 mb-5">
                                <img src="img/svg/001-delivery-truck.svg" height="60px" />
                                <h5 className="font-weight-bold my-4">Supply Chain Planning</h5>
                                <p className="text-muted px-2 mb-lg-0 text-justify">
                                    Revenue Planning, Demand Planning, Demand Sensing and Supply Planning, Inventory Planning,
                                    S&OP, Rough Cut Capacity Planning, MPS, NPI/EOL Planning.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5">
                                <img src="img/svg/Bar graph.svg" height="60px" />
                                <h5 className="font-weight-bold my-4">Sales Planning and Sales Performance Management</h5>
                                <p className="text-muted px-2 mb-lg-0 text-justify">
                                    Sales Hierarchy Definition, People Assignments, Account Transfers, Territory Planning,
                                    Account Planning, Compensation Planning, Quota Planning, Territory Goaling, Agent Level
                                    Goaling, Comp Accruals and What-if.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5">
                                <img src="img/svg/013-solution-1.svg" height="60px" />
                                <h5 className="font-weight-bold my-4">Service Lifecycle Planning</h5>
                                <p className="text-muted px-2 mb-lg-0 text-justify">
                                    Service Parts Demand Planning, Parts Inventory Planning, Repairs and Returns Planning, Parts
                                    Pricing, Reverse Logistics, Field Workforce Planning.
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-5">
                                <img src="img/svg/004-planning.svg" height="60px" />
                                <h5 className="font-weight-bold my-4">Finance Planningt</h5>
                                <p className="text-muted px-2 mb-lg-0 text-justify">
                                    Long Range Strategy Planning, Annual Operating Plan, CapEx Planning, OpEx Planning,
                                    Financial Consolidation.
                            </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}
