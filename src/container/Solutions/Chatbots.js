/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Links } from '../../app/links';
export default class Chatbots extends Component {
    render() {
        return (
            <main>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <section>
                                <h2 className="title mb-5 wow fadeIn  font-weight-bold text-uppercase" data-wow-delay="0.2s">
                                    Chatbots <span className="font-weight-light"></span>
                                </h2>
    
                                <div className="mt-4">
                                    <img src="img/svg/chatbot.svg" className="img-fluid w-100"/>
                                </div>
    
    
                                    <p className="mt-4 text-justify">There was a time when documents used to be posted at customers homes. In the
                                    current
                                    scenario, where fast information is at the core of every trend, people have grown used
                                    to
                                    messaging everything. So why keep banking in the Stone Age? The AI-based chatbots have
                                    gained a global appreciation. The reason is simple. Customers feel special with a
                                    personalized conversation and <b className="font-weight-bold">VisionAize</b> makes sure of
                                    that.</p>
    
                                    <p className="text-justify">It is an ever-improving technology that makes use of Natural Language Processing. The
                                    working is simple and takes place within two-step. First, understanding and analyzing
                                    the user request. Second, returning the response. Chatbots streamline the conversation
                                    and enhance the customer experience. They also keep your customers engaged.
                                    Meanwhile, all the data is being stored. You can use this to do analysis. It can be used
                                    as an indirect survey to understand what kind of problems customers are facing, at what
                                    points your institution can improve. </p>
    
    
                                    <p className="text-justify">Besides, chatbots are cost savings and new revenue opportunities. Your customers stay
                                    loyal
                                    to you, and there is less churn. Chatbots can also eliminate the need for customer
                                    service
                                    agents. Thus saving a lot on your human resource. You can divert them for more
                                    complicated
                                    conversations. It also saves the customer from the trouble of a phone call or personal
                                    visit. They appreciate this change. Also, with chatbots, you will have 0% traffic.
                                    Chatbots
                                    can now learn new things from past conversations and improve their ability. AI-based
                                    chatbots are efficient conversation starters. They greet the customers and collect all
                                    the
                                    data like account number and branch details easily.
    
                                </p>
    
                            </section>
    
                        </div>
                        <div className="col-md-4">
                            <div className="list-group fanylist_group">
                                <Link to={Links.ImprovedCustomerRetention} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Improved customer retention</span></Link>
                                <Link to={Links.Chatbots} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Chatbots</span></Link>
                                <Link to={Links.CustomizedInvestments} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Customized Investments</span></Link>
                                <Link to={Links.LifeTimeValuePrediction} className="list-group-item list-group-item-action">
                                    <i className="fas fa-check mr-2"></i> <span>Life Time Value Prediction</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        </main>
        )
    }
}
