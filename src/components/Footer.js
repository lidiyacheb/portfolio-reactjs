import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Copyright © Lidia Saulite</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                                url={
                                    'https://www.linkedin.com/in/lidia-saulite/'
                                }
                                quote={'Frontend Developer'}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <TwitterShareButton
                                url={'https://www.twitter.com'}
                                quote={'Frontend Developer'}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={'https://www.reddit.com'}
                                quote={'Frontend Developer'}
                                hashtag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
