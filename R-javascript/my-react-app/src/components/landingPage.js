import React from 'react';
import './landingPage.css';

const landingPage = () => {
    return(
        <div className='landing-Page'>
            <header className="header">
                <h1>Welcome to our site</h1>
                <p> Your one-stop solution for all your needs    </p>
            <a href="#services" className="cta-button">Learn More</a>
            </header>
            <section id="services" className="services">
                <h2>Our Services</h2>
                <div className="service-list">
                    <div className="service-item">
                        <h3>Service One</h3>
                        <p>Description of service one.</p>
                    </div>
                    <div className="service-item">
                        <h3>Service Two</h3>
                        <p>Description of service Two.</p>
                    </div>
                    <div className="service-item">
                        <h3>Service Three</h3>
                        <p>Description of service Three.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default landingPage;