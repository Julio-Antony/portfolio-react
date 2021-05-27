import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
//Avatar Import
import avatar1 from "../images/avatars/avatar-1.png"
import avatar2 from "../images/avatars/avatar-2.png"
import avatar3 from "../images/avatars/avatar-3.png"
import avatar4 from "../images/avatars/avatar-4.png"

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}>
            <>
                <img src={avatar1} alt="Jhon Doe "/>
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at maximus libero. Quisque consectetur sollicitudin 
                        purus, quis mattis turpis gravida.
                    </p>
                </div> 
            </>
            <>
                <img src={avatar2} alt="Jane Doe"/>
                <div className="myCarousel">
                    <h3>Jane Doe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at maximus libero. Quisque consectetur sollicitudin 
                        purus, quis mattis turpis gravida.
                    </p>
                </div>                
            </>
            <>
                <img src={avatar3} alt="Josh Doe"/>
                <div className="myCarousel">
                    <h3>Josh Doe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at maximus libero. Quisque consectetur sollicitudin 
                        purus, quis mattis turpis gravida.
                    </p>
                </div>
            </>
            <>
                <img src={avatar4} alt="Jessie Doe"/>
                <div className="myCarousel">
                    <h3>Jessie Doe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at maximus libero. Quisque consectetur sollicitudin 
                        purus, quis mattis turpis gravida.
                    </p>
                </div> 
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
