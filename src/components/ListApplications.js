import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useListApplicationsContext from "../hooks/useListApplicationsContext";
import Spinner from './Spinner';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

const ListApplications = ({children}) => {
    const { data, isLoading, handleChange } = useListApplicationsContext(); 
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleOnClick = () => navigate('/submitform');

    const handleViewApplication = (e) => {
        e.preventDefault();
        window.localStorage.setItem('projectName', JSON.stringify(e.target.value));
        window.localStorage.setItem('projectStatus', JSON.stringify(e.target.id));  
           
        navigate('/intakeform')
    }
   
    if (isLoading) {
        return <Spinner />
    }

    let content = ''
    
    if (!data.length) {
        content =  (           
            <div className="container data-container no-data">
                <div className="row">
                    <div className="col-12 create-app">
                        <button type="button" className="btn btn-success create-app-btn" onClick={handleOnClick}>Create application</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <strong>You have not created any applications yet...</strong>
                    </div>
                </div>
                <br/> 
            </div>
        )
    } else {
        content =  (
            <div className="row">
                <div className="container data-container list-app-item">
                <div className="col-12 create-app">
                    <button type="button" className="btn btn-success create-app-btn" onClick={handleOnClick}>Create application</button>
                </div>
                <hr/>
                    {data.map((item, index) => (
                        <>
                        <h4 className="data-type" key={index}>{data[index].projectName}</h4>
                        <div className="data-item">
                            <div className="text-center">
                                <div className="row">
                                    <div className="col-sm-6 view-app-status">
                                        <p className="data-type">Status: {data[index].applicationStatus}</p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 view-app-btn">
                                    <button type="button" id={data[index].applicationStatus} className="btn btn-secondary" value={data[index].projectName} onClick={handleViewApplication}>View Application</button>
                                    </div>
                                </div>
                            </div>
                        </div>          
                        </>
                    ))}
                </div>
            </div>    
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-heading-applications">Applications</h1>
                </div>
               
            </div>
            {content}
        </div>    
    )
};

export default ListApplications;
