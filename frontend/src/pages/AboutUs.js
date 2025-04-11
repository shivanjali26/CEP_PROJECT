import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container bottomContainer">
                    <div className="allText bottomText">
                        <p className="text-blk headingText">About Us</p>
                        <p className="text-blk subHeadingText">
                            A platform for affordable Educational Resources at PCCOE.
                        </p>
                        <p className="text-blk description">
                            EduMart is a vibrant online marketplace tailored for our college, where students and educators can buy and sell gently used educational resources. From textbooks to study guides, EduMart offers an affordable and eco-friendly way to access quality materials, fostering a sustainable and connected academic community.
                        </p>
                        <a href="#">
                            <button className="explore">View More</button>
                        </a>
                    </div>
                    <div className="videoContainer">
                        <iframe allowFullScreen className="mainVideo" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
                        <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" alt="dots"/>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-block">
                    <h3>Contact</h3>
                    <p>Email: EduMart@pccoe.org</p>
                    <p>📞 Contact: +123 456 7890</p>
                </div>
                <div className="footer-block">
                    <h3>About</h3>
                    <p>Welcome to EduMart! Your one-stop destination for amazing educational products and services.</p>
                </div>
                <div className="footer-block">
                    <h3>Quick Links</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
