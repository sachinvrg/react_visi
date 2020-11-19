import React, { Component, Fragment } from 'react'

export default class Wrapper extends Component {
    render() {
        console.log(this.props.getKey, "Wrapper")
        return (
            <Fragment>

                {this.props.getKey &&
                    <div id="carousel-example-3" className="box-mainslide carousel slide carousel-fade" data-ride="carousel"
                        data-interval="false">
                        {/* <!-- <ol className="carousel-indicators" id="selecttab">
                <li data-target="#carousel-example-3" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-3" data-slide-to="1"></li>
                <li data-target="#carousel-example-3" data-slide-to="2"></li>
            </ol> --> */}
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="view banner-height">
                                    {this.props.getKey.bannerImgL && <img src={this.props.getKey.bannerImgL} className="d-block w-100" alt="..." />}
                                    <div
                                        className="container h-100 d-flex align-items-center justify-content-center mask white-text text-center">
                                        <ul className={`list-unstyled animated fadeInUp ${this.props.getKey.classname ? this.props.getKey.classname : 'text-center'}`}>
                                            {this.props.getKey.heading && <li>
                                                <h2 className="display-4 text-white oswaldFont">{this.props.getKey.heading}<span
                                                    className="font-weight-light text-white border-line-white"></span></h2>
                                            </li>}
                                            {this.props.getKey.description && <li>
                                                <p className="h5 mb-4">{this.props.getKey.description}
                                                </p>
                                            </li>}
                                            {/* <!-- <li>
                                    <a href="#selecttab" className="btn btn-outline-white btn-lg wow fadeIn"
                                        data-wow-delay="0.3s">Know
                                        more</a>
                                </li> --> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view banner-height">
                                    <img src="img/Images/banking.jpg" className="d-block w-100" alt="..." />
                                    <div
                                        className="container h-100 d-flex align-items-center justify-content-center mask white-text text-left">
                                        <ul className="list-unstyled animated fadeInUp mr-auto col-md-6">
                                            <li>
                                                <h2 className="display-4 text-white oswaldFont">Banking & Finance<span
                                                    className="font-weight-light text-white border-line-white"></span></h2>
                                            </li>
                                            <li>
                                                <p className="text-white">VisionAIze Offers The Intelligent Solutions To Your Business
                                                Through Digital Innovation
                                    </p>
                                            </li>
                                            <li>
                                                <a href="#selecttab" className="btn btn-outline-white btn-lg wow fadeIn"
                                                    data-wow-delay="0.3s">Know
                                        more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view banner-height">
                                    <img src="img/Images/mobility.jpg" className="d-block w-100" alt="..." />

                                    <div
                                        className="container h-100 d-flex align-items-center justify-content-center mask white-text text-right">
                                        <ul className="list-unstyled animated fadeInUp ml-auto col-md-6">

                                            <li>
                                                <h2 className="display-4 text-white oswaldFont">Mobility<span
                                                    className="font-weight-light text-white border-line-white"></span></h2>
                                            </li>
                                            <li>
                                                <p className="h5 mb-4">VisionAIze Offers The Intelligent Solutions To Your
                                                Business Through Digital Innovation
                                    </p>
                                            </li>
                                            <li>
                                                <a href="#selecttab" className="btn btn-outline-white btn-lg wow fadeIn"
                                                    data-wow-delay="0.3s">Know
                                        more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.props.getKey.Controls && <Fragment>

                            <a className="carousel-control-prev" href="#carousel-example-3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-example-3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </Fragment>}
                    </div>}
            </Fragment>

        )
    }
}
