import React from "react"
import Author from "../me.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="Author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Hello ! I am Julio Antony. I have been developing websites for over 2 years. I'm Full-stack Web 
                        Developer. Technologies I use is MERN (MongoDB, Express, ReactJS, And NodeJS).

                        I create responsive websites that are  displayed on all devices desktops and smartphones.

                        Of Course, before begin developing any webapp, Landing Page, Business Websites or E-commerce,
                        I need to a ready-made project layout (sketch).

                        And I'm ready to do this for you, before we start developingyour website, we will discuss all the details
                        of your niche with you, we will conduct a survey of your competitors and make a list of their advantage
                        weaknesses.

                        All this is necessary to give your customers something that your competitors do not provide, or not
                        present it too, but better!

                        After the website finished and ready to deploy and sell a product of services. It is essential that your
                        potential clients know about you. I will create advertising campaign for you in Google Adwords and Facebook!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
