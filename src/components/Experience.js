import React from 'react';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <p>
                            Web-Designer.
                            <br />
                            Lotto24 AG.
                            <br />
                            Create site layouts/user interfaces by using
                            standard HTML / CSS / SASS, design sample pages
                            including colours and fonts using Photoshop, Figma
                            and Sketch.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <p>
                            Web-Designer.
                            <br />
                            Freelancer.
                            <br />
                            Designing visual imagery for websites and ensuring
                            that they are in line with branding for clients.
                            Experience in creating wireframes with Balsamiq,
                            storyboards and user flows.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2010-2016</h3>
                        Web Content Manager.
                        <br />
                        Sotmarket E-commerce.
                        <br />
                        <p>
                            Developing digital strategies and programme plans
                            around key business initiatives, engaging customers
                            online, digital content, and digital services.
                            Produce web content and other marketing
                            communication materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
