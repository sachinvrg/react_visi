import React, { Component } from 'react'

export default class XmlData extends Component {
    render() {
        return (
            <main>
                <section className="section  wow fadeIn" data-wow-delay="0.2s"
                    style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6 py-5">
                                <div className="mb-5">
                                    <h5 className="text-justify">Ideation has its own XML data management framework. This framework is designed towards
                                    the idea of handling huge XML data files (3-5 GB), querying the data with uniform and
                                    minimum response time, providing low memory footprint and relatively low CPU usage for
                                            most of the time.</h5>

                                    <ul className="list-group list-group-flush mt-5 fancylist">
                                        <li className="list-group-item"><i className="far fa-check-circle"></i>
                                            <p className="text-justify">The framework uses an XQUERY compliant XML DB in the back and provides a façade
                                            for controlling access to the XML DB. The façade also makes it possible to
                                                    switch XMLDB vendors transparently.</p>
                                        </li>
                                        <li className="list-group-item"> <i className="far fa-check-circle"></i>
                                            <p className="text-justify">The façade incorporates a proprietary second level caching mechanism to further
                                                    minimise query response time.</p>
                                        </li>
                                        <li className="list-group-item"> <i className="far fa-check-circle"></i>
                                            <p className="text-justify">The façade incorporates a configurable latching mechanism. This mechanism, used
                                            along with the configurable caching system can be used effectively to optimize a
                                                    server's performance according to the hardware configuration of the server.</p>
                                        </li>
                                        <li className="list-group-item"> <i className="far fa-check-circle"></i>
                                            <p className="text-justify">The framework has its own XML based protocol for query and response. The façade
                                            can be configured to expose a set of query services. This means, for most of the
                                            cases, exposing a particular sub-set of data as a service will mean writing an
                                                    X-QUERY and registering it with the façade.</p>
                                        </li>
                                        <li className="list-group-item"> <i className="far fa-check-circle"></i>
                                            <p className="text-justify">The framework comes ready to be deployed in servlet containers and can respond to
                                                    REST queries readily.</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-6 py-5">
                                <img src="img/svg/Enterprise Network.svg" className="img-fluid" />
                            </div>
                        </div>
                        {/* <!--Grid row--> */}
                    </div>
                </section>
            </main>
        )
    }
}
