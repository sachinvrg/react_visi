import React, { Component } from 'react'

export default class DocumentProcessing extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">
                        <div className="container">
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Client</p>
                                <p>US based MRO Operations company.
            </p>
                            </blockquote>
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Business Problem</p>
                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>FAA regulated
                    industry requires various types of documents to be processed.
                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Documents
                    follow a broad content pattern, but no specified template or order.
                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Processing
                    each quotation for a part was painstaking and took hours to process.</li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Turnaround
                    time for each part quotes review was about 5 hours.
                </li>
                                </ul>
                            </blockquote>
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Solution

            </p>
                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Implemented an
                    AI-Powered document extraction solution.

                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>The solution
                    classifies the document type and extracts required information from each document.
                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>This data is
                    rolled up by part by quote in a UI for the buyers to verify and decide on the quote.
                </li>
                                </ul>
                            </blockquote>
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Business Benefits</p>
                                <div className="row text-center d-flex justify-content-center mt-4">
                                    <div className="col-lg-3 mb-5">
                                        <img src="img/svg/012-system-1.svg" height="60px" />
                                        <h5 className="my-4">24/7 Solution


                    </h5>
                                    </div>
                                    <div className="col-lg-3 mb-5">
                                        <img src="img/svg/stop_watch.svg" height="60px" />
                                        <h5 className="my-4">TAT reduced from 5 hours to 30 mins


                    </h5>
                                    </div>
                                    <div className="col-lg-3 mb-5">
                                        <img src="img/svg/002-wallet-with-card-sticking-out.svg" height="60px" />
                                        <h5 className="my-4">60%
                                        Cost Savings


                    </h5>
                                    </div>
                                    <div className="col-lg-3 mb-5">
                                        <img src="img/svg/020-analytics-1.svg" height="60px" />
                                        <h5 className="my-4">Increased throughput of buyer team


                    </h5>
                                    </div>
                                </div>
                            </blockquote>

                        </div>
                    </section>

                </main>
            </div>
        )
    }
}
