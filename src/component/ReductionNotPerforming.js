import React, { Component } from 'react'

export default class ReductionNotPerforming extends Component {
    render() {
        return (
            <div>
                <main>

                    <section className="py-5">
                        <div className="container">
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">The Business Problem</p>
                                <p className="text-justify">A bank had a high number of non-performing assets (NPA) and wanted to forecast to see if a new
                loan applicant was likely to be a defaulter or a non-defaulter.</p>
                            </blockquote>
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Our Solution & Approach</p>
                                <h5 className="font-weight-bold">Cloud-based classification and forecasting platform
            </h5>
                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Built an
                    algorithm which achieved a classification accuracy of 72%

                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Correlated the
                    data across multiple parameters of past borrowing patterns (employment etc.) to segment loan
                    applicants with various solution approaches

                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span>Causal Matrix
                    and Impact evaluation used to provide real time scoring
                </li>
                                </ul>
                            </blockquote>
                            <blockquote className="blockquote bq-primary">
                                <p className="bq-title">Business ROI

            </p>
                                <ul className="list-group list-group-flush py-3">
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                        className="font-weight-bold">Time-Saving:</span> Using VisionAIze’s solution, the employees
                    could identify & predict potential defaulters early in the cycle </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                        className="font-weight-bold">Increased Efficiency:</span> The employee was able to predict
                    and prevent NPAs from occurring with early detections
                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                        className="font-weight-bold">$ Savings:</span> With the early detection of defaulting
                    behavior, they were able to prevent NPAs and reduce risk exposure
                </li>
                                    <li className="list-group-item"><span className="pr-4"><i className="fas fa-check"></i></span><span
                                        className="font-weight-bold">Increased Throughput:</span> Reduction in NPAs made more funds
                    available for earning interest and hence increased profits for the bank
                </li>
                                </ul>
                            </blockquote>

                        </div>
                    </section>

                </main>
            </div>
        )
    }
}
