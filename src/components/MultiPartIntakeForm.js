//https://www.youtube.com/watch?v=0SB3h1AJYQ4

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useIntakeFormContext from "../hooks/useIntakeFormContext"
import FormInputs from './FormInputs'
import Spinner from './Spinner';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

const MultiPartIntakeForm = () => {
    let projectName = JSON.parse(window.localStorage.getItem('projectName')) ? JSON.parse(window.localStorage.getItem('projectName')) : '';
    let userEmail = JSON.parse(window.localStorage.getItem('userEmail')) ? JSON.parse(window.localStorage.getItem('userEmail')) : '';
    let companyName = JSON.parse(window.localStorage.getItem('companyName')) ? JSON.parse(window.localStorage.getItem('companyName')) : '';
    
    // const { data, setData, handleChange } = useIntakeFormContext();

    const {
        title,
        page,
        setPage, 
        data,
        setData,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useIntakeFormContext();

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    const navigate = useNavigate();

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    let getAppBody = {
        "requestEvent": "GET_APPLICATION",
        "requestBody": {
            "applicationStatus": "IN-PROGRESS",
            "userEmail": userEmail,
            "companyName": companyName,
            "projectName": projectName, 
            "applicationId": `${userEmail}#${projectName.replaceAll(/\s/g,'')}` 
        }
    }

    const getData = () => {
        setIsLoading(true);
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getAppBody)
            })
            .then(response => response.json())
            .then(json => {
                if (json.applicationValues) {
                    setData(json.applicationValues)
                }
                setIsLoading(false); 
            }
        )
    }
    
    useEffect(() => {
        getData();
    }, []);

    let updateAppBody = {
        "requestEvent": "UPDATE_APPLICATION",
        "requestBody": {
            "applicationStatus": "IN-PROGRESS",
            "userEmail": userEmail,
            "companyName": companyName,
            "projectName": projectName,
            "applicationId": `${userEmail}#${projectName.replaceAll(/\s/g,'')}`,
            "applicationValues": data
        }
    }
    
    const handleSaveApplication = (e) => {
        e.preventDefault(); 
        setIsLoading(true);
        fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateAppBody)
        })
        .then(() => {
            getData()
        })
    }

    let submitAppBody = {
        "requestEvent": "SUBMIT_APPLICATION",
        "requestBody": {
            "applicationStatus": "SUBMITTED",
            "userEmail": userEmail,
            "companyName": companyName,
            "projectName": projectName,
            "applicationValues": data
            }
    }
    
     
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(submitAppBody)
        })
        .then(() => {
            setIsLoading(false);
            setSubmitted(true)
        })
    }
    
    const handleCancel = () => navigate("/")    
    
    if (isLoading) {
        return <Spinner />
    }
    
    if (data && !submitted) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="page-heading-applications">A&A Intake Workflow</h1>
                    </div>
                </div>

                <form className="data-container intake-form" onSubmit={handleSubmit}>
                    <header className="form-header">
                    <div className="row">
                        <div className="col-7">
                            <h2>{title[page]}</h2>
                        </div>
                        <div className="col-5">
                            <div className="button-container">  
                                <div class="btn-group" role="group">
                                    <button type="button" className={`btn btn-success ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                                    <button type="button" className={`btn btn-success ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>
                                    {/* <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button> //removed !canSubmit to allow form submission */}
                                    <button type="submit" className="form-submit btn btn-secondary" onClick={handleSaveApplication}>Save</button>
                                    <button type="submit" className="form-cancel btn btn-danger" onClick={handleCancel}>Cancel</button>
                                    <button type="submit" className={`btn btn-warning create-app-btn ${submitHide}`} disabled={isButtonDisabled}>Submit Application</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </header>
                    <hr/>
                    <FormInputs />
                </form>

            </div>
        );
    } else {
        return (
            <div className="container-fluid no-data">
                <div className="container data-container">
                    <strong>Your application has been submitted.</strong> 
                </div>
            </div>
        );
    }
};

export default MultiPartIntakeForm;
