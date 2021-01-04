import React from 'react';
import first from '../images/first-project.png';
import second from '../images/second-project.png';
import third from '../images/portfolio-project.png';
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
                <p>
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
            text: 'firstproject.',
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
                <p>
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
            text: 'second project.',
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
                <p>
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
            text: 'Poftfolio React project.',
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
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
        </div>
    );
};

export default Pofrfolio;
