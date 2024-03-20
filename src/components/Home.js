import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const handleOnClick = () => navigate('/datalist');

    return (
        <div className="App">
            <div className="landing-page">
                <img src="/stars-1845140_1280.jpg" alt="Earth from space" className="landing-image" />
                <div className="landing-text-container">
                    <h1 className="landing-title">Example Demo App</h1>
                    <p className="landing-description">
                        This is a demo app to demonstrate DynamoDB, Lambda, and API Gateway Integration
                    </p>
                    <button className="landing-button" onClick={handleOnClick}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
