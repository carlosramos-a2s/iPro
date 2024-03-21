import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useNewAppContext from "../hooks/useNewAppContext"
import Spinner from './Spinner';
import '../index.css';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

const NewApplicationForm = () => {
    
    const { data, handleChange } = useNewAppContext()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    let createAppBody = {
        "requestEvent": "CREATE_APPLICATION",
        "requestBody": {
            "applicationStatus": "IN-PROGRESS",
            "userEmail": data.userEmail,
            "companyName": data.companyName,
            "projectName": data.projectName
        }
    }
    
    const handleCreateApplication = (e) => {
        e.preventDefault();
        window.localStorage.setItem('userEmail', JSON.stringify(data.userEmail));
        window.localStorage.setItem('projectName', JSON.stringify(data.projectName));
        window.localStorage.setItem('companyName', JSON.stringify(data.companyName));

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createAppBody)
        })
        .then(
            () => navigate('/')
        )
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="App">
            <>
                <h1 className="page-heading">Create New Application</h1>
                <form onSubmit={handleCreateApplication} className="data-container">

                    <div>
                        <label htmlFor="name" className="form-label">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={data.firstName}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="form-label">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={data.lastName}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="form-label">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={data.companyName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Company Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            value={data.userEmail}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Email Address"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="form-label">Project Name:</label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            value={data.projectName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Project Name"
                        />
                    </div>
                    <button type="submit" className="form-submit-button btn btn-success">Create Application</button>
                </form>
            </>
        </div>
    );
};

export default NewApplicationForm;
