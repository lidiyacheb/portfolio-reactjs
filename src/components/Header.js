import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import githubIcon from '@iconify-icons/mdi/github';
import cloudDownload from '@iconify-icons/mdi/cloud-download';

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>HI! I'm Lidia Saulite</h1>
                <Typed
                    className="typed-text"
                    strings={['Front-end Developer', 'Web Designer', 'Webmaster']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div class="text-center mt-3">
                    <ul class="social-networks spin-icon">
                        <li>
                            <a
                                href="https://github.com/lidiyacheb/"
                                class="icon-github"
                            >
                                <Icon
                                    icon={githubIcon}
                                    style={{
                                        fontSize: '200%',
                                        margin: '9% 5% 0 0',
                                    }}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/lidia-saulite/"
                                class="icon-linkedin"
                            >
                                <Icon
                                    icon={linkedinIcon}
                                    style={{
                                        fontSize: '200%',
                                        margin: '9% 5% 0 5%',
                                    }}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="icon-cv" download>
                                <Icon
                                    icon={cloudDownload}
                                    style={{
                                        fontSize: '200%',
                                        margin: '9% 5% 0 5%',
                                    }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <Link
                    smooth={true}
                    to="contacts"
                    offset={-110}
                    className="btn-main-offer"
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};

export default Header;
