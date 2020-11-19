/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class ImprovementThroughDeepLearning extends Component {
    render() {
        return (
            <main>

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <section>
                                    <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                        Improvement through deep learning
                                </h2>
                                    <div className="mb-4">
                                        <img src="img/svg/deep_learning.svg" className="img-fluid w-100" />
                                    </div>
                                    <p className="text-justify">Deep learning is a secondary feature of artificial intelligence and machine learning. It
                                    makes use of artificial neural networks and algorithms inspired by the human brain. But
                                    these are a level above human intelligence. These algorithms are capable of learning
                                    from large amounts of data. Deep learning enables machines to solve complex problems
                                    using a relatively diverse data set, which can be both structured and unstructured and
                                    inter-connected. </p>

                                    <p className="text-justify">This complex feature of AI can be used to predict outputs depending on a given set of
                                    inputs. Both supervised and unsupervised deep learning can be used to train the AI
                                    algorithms. Also, deep learning can grow automatically. Each predicted data becomes feed
                                    data in turn. It is the next generation of AI and does not require human intervention.
                                    Deep learning is similar to the biological brain. It performs the functions based on
                                    simple logical statements, just like the human brain. Another vital function of deep
                                    learning is feature learning. </p>

                                    <p className="text-justify">The deep learning algorithms are capable of performing automatic feature extraction from
                                    raw data. Deep learning is a critical method of performing more advanced functions, for
                                    example, fraud detection.</p>

                                </section>
                            </div>
                            <div className="col-md-4">
                                <div className="list-group fanylist_group">
                                    <Link to={Links.SmartRiskPredictorAgileProcess}
                                        className="list-group-item list-group-item-action"> <i className="fas fa-check mr-2"></i>
                                        <span>Smart Risk Predictor for Agile
                                        Process</span></Link>
                                    <Link to={Links.SuccessThroughSprints} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Success through Sprints</span></Link>
                                    <Link to={Links.ImprovementThroughDeepLearning}
                                        className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Improvement through deep learning</span></Link>
                                    <Link to={Links.BusinessModelMakeover} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>The business model makeover</span></Link>
                                    <Link to={Links.StayingAheadCurveWith} className="list-group-item list-group-item-action">
                                        <i className="fas fa-check mr-2"></i> <span>Staying ahead of the curve with AI</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        )
    }
}
