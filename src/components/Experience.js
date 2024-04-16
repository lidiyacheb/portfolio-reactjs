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
                        <h3>2021-2023</h3>
                        <p>
                            <b>Webmaster / Webshop-Manager.</b>
                            <br />
                            Construction Project.
                            <br />
                            Maintaining and managing the basic infrastructure of the Web/CMS (WordPress).
                            Creating UI design themes, editing images (Adobe Creative Cloud).
                            Development web pages.
                            SEO auditing and web tracking.
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <p>
                            <b>Web&App Developer Trainee.</b>
                            <br />
                            WBS Coding School.
                            <br />
                            HTML5, CSS3, JS, React (Hooks, Context);
                            Node.js, REST APIs, Databases (SQL/NoSQL);
                            Console, Bash, GitHub;
                        </p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <p>
                            <b>Frontend Developer.</b>
                            <br />
                            Lotto24 AG.
                            <br />
                            Create site layouts/user interfaces by using
                            standard HTML / CSS / SCSS, JS, JQuery, Angular, and design sample pages
                            including colours and fonts using Figma.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <p>
                            <b>Web-Designer.</b>
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
                        <b>Web Content Manager.</b>
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
