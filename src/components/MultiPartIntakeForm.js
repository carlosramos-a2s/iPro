import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useIntakeFormContext from "../hooks/useIntakeFormContext"
import FormInputs from './FormInputs'
import Spinner from './Spinner';
import "react-step-progress-bar/styles.css";
import { Stepper } from 'react-form-stepper';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

const MultiPartIntakeForm = () => {
    let projectName = JSON.parse(window.localStorage.getItem('projectName')) ? JSON.parse(window.localStorage.getItem('projectName')) : '';
    let userEmail = JSON.parse(window.localStorage.getItem('userEmail')) ? JSON.parse(window.localStorage.getItem('userEmail')) : '';
    let companyName = JSON.parse(window.localStorage.getItem('companyName')) ? JSON.parse(window.localStorage.getItem('companyName')) : '';
    let projectStatus = JSON.parse(window.localStorage.getItem('projectStatus')) ? JSON.parse(window.localStorage.getItem('projectStatus')) : '';
    let controlsHide = projectStatus === 'SUBMITTED' && "controls-hide";

    const {
        title,
        page,
        setPage, 
        data,
        setData,
        canSubmit,
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
        }
    }

    const getData = () => {
        setIsLoading(true);
        fetch(`${apiEndpoint}/getapp`, {
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
            "applicationValues": data
        }
    }
    
    const handleSaveApplication = (e) => {
        e.preventDefault(); 
        setIsLoading(true);
        fetch(`${apiEndpoint}/updateapp`, {
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
        fetch(`${apiEndpoint}/updateapp`, {
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
                        <h1 className="page-heading-applications">A&A Intake Workflow - {projectName}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Stepper
                            steps={[
                                { label: 'System Info' }, 
                                { label: 'Connectivity' }, 
                                { label: 'Integrity & Availability' },
                                { label: 'PII' },
                                { label: 'Non-US Personnel' },
                                { label: 'Specialty Systems' },
                                { label: 'System Data'},
                                { label: 'Data Description' },
                                { label: 'Fisa Data' },
                                { label: 'Overlay Values' },
                                { label: 'System POC' }
                                
                            ]}
                            activeStep={page}
                        />
                    </div>
                </div>

                <form className="data-container intake-form" onSubmit={handleSubmit}>
                    <header className="form-header">
                    <div className="row">
                        <div className="col-5">
                            <h2>{title[page]}</h2>
                        </div>
                        <div className="col-2">
                            <div>  
                                <button type="button" className={`btn btn-success form-ctrl-btn ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>
                                <button type="button" className={`btn btn-success form-ctrl-btn ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>
                            </div>
                        </div>
                        <div className={`col-5 intake-form-controls-2 ${controlsHide}`}>
                            <button type="button" className="btn btn-secondary form-ctrl-btn" onClick={handleSaveApplication}>Save</button>
                            <button type="button" className="btn btn-danger form-ctrl-btn" onClick={handleCancel}>Cancel</button>
                            <button type="submit" className="btn btn-warning form-ctrl-btn" disabled={!canSubmit}>Submit Application</button>
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
