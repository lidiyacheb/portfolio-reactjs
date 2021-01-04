import React from 'react';
import author from '../icon-author.png';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/sass';
import reactIcon from '@iconify/icons-logos/react';
import vueIcon from '@iconify/icons-logos/vue';

const AboutMe = () => {
    return (
        <div id="about">
            <div className="col-md-12">
                <h1 className="py-5">
                    <span>About me</span>
                </h1>
                <div className="container">
                    <div className="row center mx-auto mb-5">
                        <div className="col-lg-4 col-md-4 mb-5 center">
                            <div className="polaroid">
                                <span style={{ cursor: 'auto' }}>
                                    <img
                                        height="250px"
                                        src={author}
                                        alt="Avatar placeholder"
                                    />
                                    <Icon
                                        icon={angularIcon}
                                        style={{
                                            fontSize: '200%',
                                            margin: '9% 5% 0 5%',
                                        }}
                                    />
                                    <Icon
                                        icon={reactIcon}
                                        style={{
                                            fontSize: '200%',
                                            margin: '9% 5% 0 5%',
                                        }}
                                    />
                                    <Icon
                                        icon={vueIcon}
                                        style={{
                                            fontSize: '200%',
                                            margin: '9% 5% 0 5%',
                                        }}
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 center">
                            <div className="col-lg-12 col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span
                                            className="iconify"
                                            data-icon="emojione:red-circle"
                                            data-height="15"
                                            data-inline="false"
                                        ></span>{' '}
                                        &nbsp;{' '}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:yellow-circle"
                                            data-height="15"
                                            data-inline="false"
                                        ></span>{' '}
                                        &nbsp;{' '}
                                        <span
                                            className="iconify"
                                            data-icon="twemoji:green-circle"
                                            data-height="15"
                                            data-inline="false"
                                        ></span>
                                    </div>
                                    <div
                                        className="card-body text-justify ml-3 mr-3"
                                        style={{
                                            height: 'auto',
                                            fontSize: '132%',
                                            lineHeight: '200%',
                                        }}
                                    >
                                        <span className="wave">
                                            Hi! I am a passionate Front-end
                                            Developer and Web Designer who has
                                            been working with newest tech stack
                                            (MERN) such as framework React,
                                            Node.js/Express, MongoDB/Mongoose.
                                            You have an idea, you need someone
                                            to bring it to life. I can take your
                                            product to the next level, with my
                                            knowledge and creativity.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
