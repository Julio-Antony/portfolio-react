import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
/*********Font Awesome*********/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
/*********React Popupbox*********/
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //netflix
    const openPopupboxNetflix = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc odio,
            gravida ac mi ac, pharetra ultrices sem. Ut aliquet sagittis odio, 
            in interdum lacus pharetra id. Maecenas faucibus sapien metus, id egestas 
            nunc efficitur ut. Vivamus aliquet rutrum sapien, sit amet tristique ex 
            interdum vel. Vivamus feugiat interdum diam eget faucibus. Nam vitae gravida 
            lectus, vitae porttitor odio. In ut ligula ut ex tincidunt efficitur. 
            In dictum viverra tempor. Quisque suscipit massa eget odio ultrices fringilla. 
            Fusce varius diam lorem, nec convallis dolor finibus non.
        </p>
        <b>Github :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>
        https://github.com/8020Coding/netflix-project
        </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //City Guide
    const openPopupboxCityGuide = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide Project"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc odio,
            gravida ac mi ac, pharetra ultrices sem. Ut aliquet sagittis odio, 
            in interdum lacus pharetra id. Maecenas faucibus sapien metus, id egestas 
            nunc efficitur ut. Vivamus aliquet rutrum sapien, sit amet tristique ex 
            interdum vel. Vivamus feugiat interdum diam eget faucibus. Nam vitae gravida 
            lectus, vitae porttitor odio. In ut ligula ut ex tincidunt efficitur. 
            In dictum viverra tempor. Quisque suscipit massa eget odio ultrices fringilla. 
            Fusce varius diam lorem, nec convallis dolor finibus non.
        </p>
        <b>Demo :</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/","blank")}>
            https://city-guide-app-project.herokuapp.com/
        </a>
        <br/>
        <b>Github :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app","blank")}>
            https://github.com/8020Coding/city-guide-app
        </a>
        </>
        )
        PopupboxManager.open({content})
    }
    
    const popupboxConfigCityGuide = {
        titleBar: {
        enable: true,
        text: "City Guide App Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Portfolio
    const openPopupboxPortfolio = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc odio,
            gravida ac mi ac, pharetra ultrices sem. Ut aliquet sagittis odio, 
            in interdum lacus pharetra id. Maecenas faucibus sapien metus, id egestas 
            nunc efficitur ut. Vivamus aliquet rutrum sapien, sit amet tristique ex 
            interdum vel. Vivamus feugiat interdum diam eget faucibus. Nam vitae gravida 
            lectus, vitae porttitor odio. In ut ligula ut ex tincidunt efficitur. 
            In dictum viverra tempor. Quisque suscipit massa eget odio ultrices fringilla. 
            Fusce varius diam lorem, nec convallis dolor finibus non.
        </p>
        <b>Demo :</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/","blank")}>
            https://portfolio-rea-and-material-ui.herokuapp.com/
        </a>
        <br/>
        <b>Github :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio","blank")}>
            https://github.com/8020Coding/portfilio
        </a>
        </>
        )
        PopupboxManager.open({content})
    }
    
    const popupboxConfigPortfolio = {
        titleBar: {
        enable: true,
        text: "Portfolio React and Material UI Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Task Manager
    const openPopupboxTaskManager = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager Project"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc odio,
            gravida ac mi ac, pharetra ultrices sem. Ut aliquet sagittis odio, 
            in interdum lacus pharetra id. Maecenas faucibus sapien metus, id egestas 
            nunc efficitur ut. Vivamus aliquet rutrum sapien, sit amet tristique ex 
            interdum vel. Vivamus feugiat interdum diam eget faucibus. Nam vitae gravida 
            lectus, vitae porttitor odio. In ut ligula ut ex tincidunt efficitur. 
            In dictum viverra tempor. Quisque suscipit massa eget odio ultrices fringilla. 
            Fusce varius diam lorem, nec convallis dolor finibus non.
        </p>
        <b>Demo :</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/","blank")}>
            https://react-redux-task-manager.herokuapp.com/
        </a>
        <br/>
        <b>Github :</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager","blank")}>
            https://github.com/8020Coding/task-manager
        </a>
        </>
        )
        PopupboxManager.open({content})
    }
    
    const popupboxConfigTaskManager = {
        titleBar: {
        enable: true,
        text: "Task Manager Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>           
                    </div>
                {/*-*/}                
                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={cityGuide} alt="City Guide Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>           
                    </div>                
                {/*-*/}               
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="Portfolio Project..."/>
                        <div className="overflow"></div> 
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>          
                    </div>               
                {/*=*/}               
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Task Manager Project..."/>
                        <div className="overflow"></div>    
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>       
                    </div>
                </div>    
            </div>  
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigCityGuide}/>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
            <PopupboxContainer {...popupboxConfigTaskManager}/>                 
        </div>
    )
}

export default Portfolio