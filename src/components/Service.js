import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    return (
        <div id="services" className="services">
            <div className="container py-5">
                <h1 className="mb-5">My Services</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faDesktop}
                                    size="2x"
                                />
                            </div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileCode}
                                    size="2x"
                                />
                            </div>
                            <h3>Web Developing</h3>
                            <p>your website will be build with a new proven technologies.</p>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFacebookF}
                                    size="2x"
                                />
                            </div>
                            <h3>Mobile Design</h3>
                            <p>I will make design your Mobile App looks awesome</p>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faGoogle}
                                    size="2x"
                                />
                            </div>
                            <h3>Mobile App Developing</h3>
                            <p>Your Mobile App can be use for everyone easily</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
