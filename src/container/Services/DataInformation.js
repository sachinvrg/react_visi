/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class DataInformation extends Component {
    render() {
        return (
            <main>
                <section className="light-blue-back pb-5">
                    <div className="container">
                        <p className="pt-5 text-justify">
                            Enterprise data & information management depends on an integrated data architecture that facilitates
                            the
                            retrieval, analysis and manipulation of data across all functions and business units, as well as
                            several
                            applications. The challenge in today’s environment is that this information is scattered across
                            several
                            applications and diversified platforms. An integrated data architecture, necessitates implementation
                            of
                            sophisticated processes and methodologies in compliance with changing regulations. To leverage
                            maximum
                            value from data, organisations need an efficient process and foundation for handling the data
                            architecture and creating an efficient way to securely manage data across the enterprise.
                </p>
                        <p className="text-justify">
                            At VisionAIze, our data management services provide innovative enterprise solutions, customizable to
                            fit
                            the information needs of any organisation, helping drive better decision-making and improve business
                            performance. We offer a complete spectrum of enterprise data & information management services.
                </p>
                    </div>
                </section>


                <section className="py-5">
                    <div className="container">
                        <h3 className="title my-4 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            DataOps
                </h3>
                        <p className="text-justify">
                            DataOps, the set of best practices, ameliorating coordination between data science and operations,
                            has
                            become a critical discipline for any IT organisation that must survive and thrive in a world where
                            real-time business intelligence is a competitive necessity.
                </p>
                        <h3 className="title my-4 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            What is DataOps?
                </h3>
                        <p className="text-justify">
                            DataOps is a collaborative data management practice focused on improving the communication,
                            integration
                            and automation of data flows between data managers and data consumers across any organisation.
                </p>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-8">
                                <h5 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    VisionAIze’s DataOps Service is employed to address the following challenges
                        </h5>
                                <div className="list-group mb-4">

                                    <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-2 h6">Unsynchronized departments</h5>
                                        </div>
                                        <p className="mb-2 text-justify">On account of discrepancy in data and analytics goals and culture, it is
                                    essential to employ consistency among different stakeholders operating in silos.</p>
                                    </a>
                                    <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-2 h6">Process inefficiency</h5>
                                        </div>
                                        <p className="mb-2 text-justify">Time and budget-consuming, homegrown big data solutions end up into
                                    impoverished technologies leading to high-risk.</p>
                                    </a>
                                    <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-2 h6">Technological impairment</h5>
                                        </div>
                                        <p className="mb-2 text-justify">Integration and sustenance of ever-evolving Big Data and AI landscape is
                                    cumbersome and often overseen as high-risk investments.</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src="img/svg/dataops.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="light-blue-back py-5">
                    <div className="container">
                        <h3 className="title my-4 wow fadeIn font-weight-bold text-uppercase" data-wow-delay="0.2s"
                            style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                            How VisionAIze implement DataOps?
                </h3>
                        <p className="text-justify">
                            VisionAIze employs various stages to automate the design, deployment and management of data delivery
                            with
                            the appropriate levels of governance and metadata, refining the use and value of data in a dynamic
                            environment.
                </p>
                        <p className="text-justify">
                            The succession of stages, referred to as data pipeline, where data flows, beginning with extraction
                            from
                            myriad of data sources till visualization for business consumption. Leveraging CI/CD practices, it
                            orchestrates and automates the pipeline to ensure optimum production.
                </p>
                        <img className="img-fluid mb-4" src="img/svg/design_data_pipe.svg" />
                        <p className="text-justify">
                            This process is illustrated by the succession of three loops, in which data models get promoted
                            between environments, as new data is added in the pipeline.
                </p>
                        <img className="img-fluid mb-4" src="img/Images/DataOps.png" />

                    </div>
                </section>
                <section className="py-5">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            {/* Card */}
                            <div className="text-center">

                                {/* Card image */}

                                {/* Card content */}
                                <div className="card-body">

                                    {/* Title */}
                                    <h5 className="card-title font-weight-bold">Loop 1</h5>
                                    <h6 className="card-title">Sandbox</h6>
                                    {/* Text */}
                                    <p className="card-text">The data teams explore raw data for fast experimentation to have
                                first set of unrefined analyses.</p>
                                </div>

                            </div>
                            {/* Card */}
                        </div>
                        <div className="col-md-4">
                            {/* Card */}
                            <div className="text-center">

                                {/* Card image */}

                                {/* Card content */}
                                <div className="card-body">

                                    {/* Title */}
                                    <h5 className="card-title font-weight-bold">Loop 2</h5>
                                    <h6 className="card-title">Staging</h6>
                                    {/* Text */}
                                    <p className="card-text text-justify">Data is appropriately cleaned, documented and initial models are
                                    refined through successive iterations enhancing quality till they are trustworthy
                                enough to reach production.</p>
                                </div>

                            </div>
                            {/* Card */}
                        </div>
                        <div className="col-md-4">
                            {/* Card */}
                            <div className="text-center">

                                {/* Card image */}

                                {/* Card content */}
                                <div className="card-body">

                                    {/* Title */}
                                    <h5 className="card-title font-weight-bold">Loop 3</h5>
                                    <h6 className="card-title">Production</h6>
                                    {/* Text */}
                                    <p className="card-text text-justify">Refined analytical models are promoted to the production stage to
                                    be used by data consumers in their daily activities, where they are able to
                                    accelerate decision-making processes, generating long-term business value and ROI,
                                leveraging acquired knowledge.</p>
                                </div>

                            </div>
                            {/* Card */}
                        </div>
                    </div>
                </section>
                <section className="light-blue-back py-5">
                    <div className="container">
                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-md-4">
                                <img src="img/Images/Data-Governance.png" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h4 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    Data Governance
                        </h4>
                                <h6 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                    Concerns Pre- & Post-Process Implementation
                        </h6>
                                <p className="text-justify">Pre-processes pertain to the highest levels of business. Decisions are made regarding the
                                sanctioning of data. This involves creation of policies and decisions around permission to
                            use data and how to use data.</p>
                                <p>Post-process involves daily strategies that support the ongoing formulation of policies for
                            data.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-5">
                    <div className="container">
                        <div className="row mb-5 justify-content-center align-items-center">

                            <div className="col-md-8">
                                <h4 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    Data Quality
                        </h4>

                                <p className="text-justify">Increase your data quality to leverage greater value from it. VisionAIze has core
                                competencies
                                in aligning your organisation’s data quality with business outcomes. We accomplish this by
                                collecting data quality rules across your organisation, reconciling any gaps, and
                                continuously monitoring the quality of your data to ensure that it meets the requisite
                            standard.</p>
                                <h6 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.3s' }}>
                                    Better Data Quality = Better Data Integration
                        </h6>
                                <p className="text-justify">Strong levels of data integration are essential for the solution to succeed. We drive
                                continuous improvement of integration by leveraging meta-data management along with master
                            data management.</p>
                            </div>
                            <div className="col-md-4">
                                <img src="img/svg/dataqwl.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="light-blue-back py-2">
                    <div className="container">
                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-md-4">
                                <img src="img/Images/Data-Integration.png" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h4 className="title my-4 wow fadeIn font-weight-bold" data-wow-delay="0.2s"
                                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    Data Integration
                        </h4>
                                <p className="text-justify">
                                    Data integration across disparate data sources is necessary to support the solution. This
                                    requires consistent data definitions across an enterprise. The sheer number of data sources
                                    adds to the challenge of data integration. Many scenarios highlight data integration
                                    challenges
                        </p>
                                <ul className="list-group py-3">
                                    <li className="list-group-item">Mergers and acquisitions</li>
                                    <li className="list-group-item">New development systems</li>
                                    <li className="list-group-item">New application systems that require integration</li>
                                </ul>
                                <p className="text-justify">We have extensive experience in this area and have helped several customers create
                                initiatives including metadata management and master data management, aligning with the
                                Service Oriented Architecture (SOA) and standardizing platforms with consistent data
                            definitions throughout the organisation.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-4">
                                {/* Card */}
                                <div className="card shadow">

                                    {/* Card image */}
                                    <img className="card-img-top obj_H200" src="img/Images/datasqr.jpg" alt="Card image cap" />

                                    {/* Card content */}
                                    <div className="card-body">

                                        {/* Title */}
                                        <h5 className="card-title"><a>Data Security and Privacy</a></h5>
                                        {/* Text */}
                                        <p className="card-text text-justify">Data security and privacy is critical in today’s connected business
                                        environment. We have extensive experience. We have extensive experience working with
                                        senior management to understand data regulations and formulate data security
                                        policies across the enterprise. This includes identifying the most sensitive data
                                        and aligning it with appropriate compliances. We identify and define data-related
                                    controls to manage risk.</p>
                                    </div>

                                </div>
                                {/* Card */}
                            </div>
                            <div className="col-md-4">
                                {/* Card */}
                                <div className="card shadow-lg">

                                    {/* Card image */}
                                    <img className="card-img-top obj_H200" src="img/Images/metadata.jpg" alt="Card image cap" />

                                    {/* Card content */}
                                    <div className="card-body">

                                        {/* Title */}
                                        <h5 className="card-title"><a>Meta-Data Management</a></h5>
                                        {/* Text */}
                                        <p className="card-text text-justify">We have the experience to fully develop effective metadata
                                        management strategies within organisations. Our approach begins with analysis of the
                                        current environment, applications and business needs surrounding metadata, followed
                                        by defining high-level business, technical and metadata solution requirements. We
                                        provide recommendations on approach, architecture, governance, risk assessment and
                                        other topics with a roadmap and high-level project plan. Leverage our experience as
                                    well as our proven project methodologies and templates.</p>
                                    </div>

                                </div>
                                {/* Card */}
                            </div>
                            <div className="col-md-4">
                                {/* Card */}
                                <div className="card shadow">

                                    {/* Card image */}
                                    <img className="card-img-top obj_H200" src="img/Images/master_data.jpg" alt="Card image cap" />

                                    {/* Card content */}
                                    <div className="card-body">

                                        {/* Title */}
                                        <h5 className="card-title"><a>Master Data Management</a></h5>
                                        {/* Text */}
                                        <p className="card-text text-justify">Data management in large organisations is extremely complex. Master
                                        data management addresses this challenge, leveraging your data for greater
                                        organisational value. We help you define and understand MDM and the extraordinary
                                        value you can reap from it. We provide an overview of various architecture types for
                                        MDM and help you determine and implement the services best-suited to your
                                    organisational needs.</p>
                                    </div>

                                </div>
                                {/* Card */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
