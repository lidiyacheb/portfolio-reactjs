import React from 'react';
import first from '../images/first-project.png';
import second from '../images/second-project.png';
import third from '../images/portfolio-project.png';
import fourth from '../images/fourth-project.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Pofrfolio = () => {
    // Recipe-book
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={first}
                    alt="first project..."
                />
                <p className="popup-title">
                    A full-stack web application with vegetarian recipes.
                    <br />
                    React.js, JavaScript, Algolia Search, HTML, CSS, Bootstrap,
                    Express.js / Node.js, PostgreSQL / ElephantSQL.
                </p>
                <b>GitHub:</b>{' '}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open('https://github.com/ansocab/recipe-book')
                    }
                ></a>
                https://github.com/ansocab/recipe-book
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: 'React project.',
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // Pokie-fight App
    const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={second}
                    alt="second project..."
                />
                <p className="popup-title">
                    A full-stack web game, Pokie-fight.
                    <br />
                    HTML, CSS, Bootstrap, React.js, JavaScript, Express.js /
                    Node.js, MongoDB.
                </p>
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            'https://github.com/sohad76423/pokie-battle-front',
                            '_blank'
                        )
                    }
                ></a>
                <br />
                <b>GitHub:</b>{' '}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            'https://github.com/sohad76423/pokie-battle-front',
                            '_blank'
                        )
                    }
                ></a>
                https://github.com/sohad76423/pokie-battle-front
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: 'React project.',
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={third}
                    alt="Portfolio Project..."
                />
                <p className="popup-title">
                    A front-end portfolio project.
                    <br />
                    HTML, CSS, Bootstrap, React.js, JavaScript.
                </p>
                <a
                    className="hyper-link"
                    onClick={() => window.open('https://github.com', '_blank')}
                ></a>
                <br />
                <b>GitHub:</b>{' '}
                <a
                    className="hyper-link"
                    onClick={() => window.open('https://github.com', '_blank')}
                ></a>
                https://github.com/lidiyacheb
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: 'React project.',
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    // TravelBudget Mobile App
    const openPopupboxTravelBudget = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={fourth}
                    alt="fourth project..."
                />
                <p className="popup-title">
                    A react/cordova mobile App, OnTrip.
                    <br />
                    HTML, CSS, Material UI, React.js, Cordova, Xcode, Chart.js,
                    Foursquare API.
                </p>
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            'https://github.com/lidiyacheb/tripbudget',
                            '_blank'
                        )
                    }
                ></a>
                <br />
                <b>GitHub:</b>{' '}
                <a
                    className="hyper-link"
                    onClick={() =>
                        window.open(
                            'https://github.com/lidiyacheb/tripbudget',
                            '_blank'
                        )
                    }
                ></a>
                https://github.com/lidiyacheb/tripbudget
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigTravelBudget = {
        titleBar: {
            enable: true,
            text: 'React project',
        },
        fadeIn: true,
        fadeInSpeed: 500,
    };

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxNetflix}
                    >
                        <img
                            className="portfolio-image"
                            src={first}
                            alt="first"
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxCityGuide}
                    >
                        <img
                            className="portfolio-image"
                            src={second}
                            alt="second project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxPortfolio}
                    >
                        <img
                            className="portfolio-image"
                            src={third}
                            alt="Portfolio React project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/* - */}
                    <div
                        className="portfolio-image-box"
                        onClick={openPopupboxTravelBudget}
                    >
                        <img
                            className="portfolio-image"
                            src={fourth}
                            alt="fourth project..."
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />

            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTravelBudget} />
        </div>
    );
};

export default Pofrfolio;
