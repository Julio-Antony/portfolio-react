import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon
}
from "react-share";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Cikarang,Kab.Bekasi</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:081381953798">+6281381953798</a>
                        </div>
                        <div className="d-flex">
                            <p>julioantony2@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Experience</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Testimonials</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/Julio-Antony"}
                                quote={"Fullstack Developer"}
                                hashtag="#Javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://github.com/Julio-Antony"}
                                quote={"Fullstack Developer"}
                                hashtag="#Javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <TelegramShareButton
                                url={"https://github.com/Julio-Antony"}
                                quote={"Fullstack Developer"}
                                hashtag="#Javascript"
                            >
                                <TelegramIcon className="mx-3" size={36}/>
                            </TelegramShareButton>
                            <LinkedinShareButton
                                url={"https://github.com/Julio-Antony"}
                                quote={"Fullstack Developer"}
                                hashtag="#Javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()} Devjul | All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
