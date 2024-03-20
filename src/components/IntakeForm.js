//https://www.youtube.com/watch?v=0SB3h1AJYQ4

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useIntakeFormContext from "../hooks/useIntakeFormContext"
import Spinner from './Spinner';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

const IntakeForm = () => {
    let projectName = JSON.parse(window.localStorage.getItem('projectName'));
    let userEmail = JSON.parse(window.localStorage.getItem('userEmail'));
    let companyName = JSON.parse(window.localStorage.getItem('companyName'));
    const { data, setData, handleChange } = useIntakeFormContext();
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

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
                    <div className="col">
                        <h1 className="page-heading-applications">A&A Intake Workflow</h1>
                    </div>
                    <div className="col create-app">
                        <button type="button" className="btn btn-warning create-app-btn" disabled={isButtonDisabled} onClick={handleSubmit}>Submit application</button>
                    </div>
                </div>

                <form onSubmit={handleSaveApplication} className="data-container">
                    <h2>{projectName + ' Controls'}</h2>
                    
                    <h4 className="section-title">System Info</h4>
                    <hr/>
                    
                    <div className="row">
                        <div className="col-12 text-inputs">     
                            <label htmlFor="sysName"><span className="input-required">*</span> System Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <input
                                type="text"
                                id="sysName"
                                name="sysName"
                                placeholder=""
                                pattern="([A-Z])[\w+.]{1,}"
                                value={data.sysName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">     
                            <label htmlFor="sysDescription"><span className="input-required">*</span> System Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <input
                                type="text"
                                id="sysDescription"
                                name="sysDescription"
                                placeholder=""
                                pattern="([A-Z])[\w+.]{1,}"
                                value={data.sysDescription}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                                
                    <div className="row">
                        <div className="col-12"> 

                        <label htmlFor="sysFunction"><span className="input-required">*</span> System function</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="sysFunction1" name="sysFunction1" checked={data.sysFunction1} value={data.sysFunction1} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Provide Open Source Analysis
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="sysFunction1" name="sysFunction2" checked={data.sysFunction2} value={data.sysFunction2} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Provide Technical Capabilities
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="sysFunction3" name="sysFunction3" checked={data.sysFunction3} value={data.sysFunction3} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Support Facility Infrastructure Services
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="sysFunction4" name="sysFunction4" checked={data.sysFunction4} value={data.sysFunction4} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Provide Signal Analysis
                            </label>
                        </div>

                        </div>
                    </div>       

                    <div className="row">
                        <div className="col-12">          
                            <div>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Which known system are you receiving data from?
                                </label>
                                <select className="form-select" aria-label="Default select example" id = "sysKnownSystem" name= "sysKnownSystem" value={data.sysKnownSystem} onChange={handleChange}>
                                    <option value="1">1000 - 1099</option>
                                    <option value="2">2000 - 2199</option>
                                    <option value="3">3000 - 3199</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <hr/>

                    <h4 className="section-title">Connectivity</h4>

                    <div className="row">
                        <div className="col-12"> 
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Which option describes this systems connectivity model?
                            </label>
                            <select className="form-select" aria-label="Default select example" id="connModel" name="connModel" value={data.connModel} onChange={handleChange}>
                                <option value="1">Hosted on a network or enclave</option>
                                <option value="2">Appliance</option>
                                <option value="3">Disconnected Enclave</option>
                                <option value="4">Stand Alone</option>
                                <option value="5">General/Open Netowrk</option>
                                <option value="6">Connected Enclave</option>
                            </select>
                            <label htmlFor="sysFunction">Which networks will this system connect to? List all that apply.</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="connNetWork1" name="connNetWork1" checked={data.connNetWork1} value={data.connNetWork1} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    C2E
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="connNetWork2" name="connNetWork2" checked={data.connNetWork2} value={data.connNetWork2} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Open internet
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="connNetWork3" name="connNetWork3" checked={data.connNetWork3} value={data.connNetWork3} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Verizon
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="connNetWork4" name="connNetWork4" checked={data.connNetWork4} value={data.connNetWork4} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    A&A
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="connNetWork5" name="connNetWork5" checked={data.connNetWork5} value={data.connNetWork5} onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    CS2
                                </label>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    How will these systems connect to the C2S?
                                </label>
                                <select className="form-select" aria-label="Default select example" id="connC2S" name="connC2S" value={data.connC2S} onChange={handleChange}>
                                    <option value="1">Standard Firewall</option>
                                    <option value="2">C2E Firewall</option>
                                    <option value="3">C2S Firewall</option>
                                    <option value="4">Enterprise Network</option>
                                    <option value="5">Non-Standard Firewall</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    How will the systems be protected?
                                </label>
                                <select className="form-select" aria-label="Default select example" id="connSysProtection" name="connSysProtection" value={data.connSysProtection} onChange={handleChange}>
                                    <option value="1">Tranfer CDS</option>
                                    <option value="2">Multilevel CDS</option>
                                    <option value="3">Access CDS</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    What type of CDS is the connection with the Navy?
                                </label>
                                <select className="form-select" aria-label="Default select example" id="connNavyCDS" name="connNavyCDS" value={data.connNavyCDS} onChange={handleChange}>
                                    <option value="1">Tranfer CDS</option>
                                    <option value="2">Multilevel CDS</option>
                                    <option value="3">Access CDS</option>
                                </select>
                            </div>
                    
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Does this system move any data high to low via a CDS approval?
                                </label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="connHighLowApproval" id={data.connHighLowApprovalYes} value={data.connHighLowApprovalYes} checked={data.connHighLowApprovalYes === data.connHighLowApprovalYes} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="connHighLowApprovalYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="connHighLowApproval" id={data.connHighLowApprovalNo} value={data.connHighLowApprovalNo} checked={data.connHighLowApprovalYes === data.connHighLowApprovalYes} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="connHighLowApprovalNo">
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Is this system responsible htmlFor the security of any CDS?
                                </label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="connCdsSecResponsibility" id="connCdsSecResponsibilityYes" value={data.connCdsSecResponsibilityYes} checked={data.connHighLowApprovalYes === data.connHighLowApprovalYes} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="connCdsSecResponsibility" id="connCdsSecResponsibilityNo" value={data.connCdsSecResponsibilityNo} checked={data.connHighLowApprovalYes === data.connHighLowApprovalYes} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <label htmlFor="systemName">Please Explain - no</label>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-12"> 
                        <input
                                type="text"
                                id="connNoCDS"
                                name="connNoCDS"
                                placeholder=""
                                pattern="([A-Z])[\w+.]{1,}"
                                value={data.connNoCDS}
                                onChange={handleChange}
                            />
                        </div>
                    </div> 

                    <br/>
                    <hr/>
                    
                    <h4 className="section-title">Integrity & Availability</h4>
                    
                    <label htmlFor="sysFunction">Will this system be an authoritative data store?</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="intAuthoritativeDataStoreYes" name="intAuthoritativeDataStoreYes" checked={data.intAuthoritativeDataStoreYes} value={data.intAuthoritativeDataStoreYes} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="intAuthoritativeDataStoreNo" name="intAuthoritativeDataStoreNo" checked={data.intAuthoritativeDataStoreNo} value={data.intAuthoritativeDataStoreNo} onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                No
                            </label>
                        </div>

                        <div>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                How much continuous downtime will the system tolerate in production?
                            </label>
                            <select className="form-select" aria-label="Default select example" id="intContDowntime" name="intContDowntime" value={data.intContDowntime} onChange={handleChange}>
                                <option value="1">On hour or less</option>
                                <option value="2">Over and hour up to 24 hours</option>
                                <option value="3">Over 24 hours</option>
                            </select>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Will this system, its users, or downstream systems be unable to function if this system's data is corrupted or lost?
                            </label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="intDownstreamFunct" id="intDownstreamFunctYes" checked={data.intDownstreamFunctYes === data.intDownstreamFunctYes} value={data.intDownstreamFunctYes} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="intDownstreamFunct" id="intDownstreamFunctNo" checked={data.intDownstreamFunctNo === data.intDownstreamFunctNo} value={data.intDownstreamFunctNo} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    No
                                </label>
                            </div>
                        </div>

                    <br/>
                    <hr/>
                    
                    <h4 className="section-title">PII</h4>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            How much PII will  the system hold, transmit or process?
                        </label>
                        <select className="form-select" aria-label="Default select example" name="piiDataAmount" id="piiDataAmount" value={data.piiDataAmount} onChange={handleChange}>
                            <option value="1">Large number</option>
                            <option value="2">Substantial number</option>
                            <option value="3">Limited number</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Which of the followoing personally identifiable information (PII) data fields will this system process,
                            store or transmit, including data htmlFor both US persons and foreign? Select all that apply.
                        </label>
                        <select className="form-select" aria-label="Default select example" name="piiDataType" id="piiDataType" value={data.piiDataType} onChange={handleChange}>
                            <option value="1">A&A</option>
                            <option value="2">Travel PIT</option>
                            <option value="3">Biometrics</option>
                            <option value="4">SSH</option>
                        </select>
                    </div>

                    <br/>
                    <hr/>

                    <h4 className="section-title">Non-US Personnel</h4>

                    <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Will this system allow any direct or indirect access to non-US users?
                    </label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nonUSDirectAccess" id="flexRadioDefault1" checked={data.nonUSDirectAccessYes === data.nonUSDirectAccessYes} value={data.nonUSDirectAccessYes} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nonUSDirectAccess" id="flexRadioDefault1" checked={data.nonUSDirectAccessNo === data.nonUSDirectAccessNo} value={data.nonUSDirectAccessNo} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            No
                        </label>
                    </div>
                    </div>

                    <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Will this system store, process or transmit data that is NOT releasable to some of the users 
                        who have access to this system?
                    </label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nonUSReleasbleData" id="nonUSReleasbleDataYes" checked={data.nonUSReleasbleDataYes === data.nonUSReleasbleDataYes} value={data.nonUSReleasbleDataYes} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nonUSReleasbleData" id="nonUSReleasbleDataNo" checked={data.nonUSReleasbleDataNo === data.nonUSReleasbleDataNo} value={data.nonUSReleasbleDataNo} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            No
                        </label>
                    </div>
                    </div>

                    <br/>
                    <hr/>

                    <h4 className="section-title">Specialty Systems</h4>

                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Is this system a space platform?
                        </label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="specSysSpace" id="specSysSpaceYes" checked={data.specSysSpaceYes === data.specSysSpaceYes} value={data.specSysSpaceYes} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="specSysSpace" id="specSysSpaceNo" checked={data.specSysSpaceNo === data.specSysSpaceNo}  value={data.specSysSpaceNo} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                No
                            </label>
                        </div>
                        </div>

                        <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Will wireless technologies be used as a part of the system?
                        </label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="specSysWireless" id="specSysWirelessYes" checked={data.specSysWirelessYes === data.specSysWirelessYes} value={data.specSysWirelessYes} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="specSysWireless" id="specSysWirelessNo" checked={data.specSysWirelessNo === data.specSysWirelessNo} value={data.specSysWirelessNo} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                No
                            </label>
                        </div>
                        </div>

                        <br/>
                        <hr/>

                        <h4 className="section-title">System Data</h4>
                        <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Record classification
                        </label>
                        <select className="form-select" aria-label="Default select example" name="sysDataRecordClass" id="sysDataRecordClass" value={data.sysDataRecordClass} onChange={handleChange}>
                            <option value="1">Unclassified</option>
                            <option value="2">Secret</option>
                        </select>
                        </div>

                        <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            At anytime will your system store, process or transmit actual production data??
                        </label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="sysDataProdData" id="sysDataProdDataYes" checked={data.sysDataProdDataYes === data.sysDataProdDataYes} value={data.sysDataProdDataYes} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="sysDataProdData" id="sysDataProdDataNo" checked={data.sysDataProdDataNo === data.sysDataProdDataNo}  value={data.sysDataProdDataNo} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                No
                            </label>
                        </div>
                        </div>

                        <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Which known systems are you tranferring data to?
                        </label>
                        <select className="form-select" aria-label="Default select example" name="sysDataKnownSystemTransfer" id="sysDataKnownSystemTransfer" value={data.sysDataKnownSystemTransfer} onChange={handleChange}>
                            <option value="1">Old system</option>
                            <option value="2">New system</option>
                        </select>
                        </div>

                        <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        Which known systems are you receiving data from?
                        </label>
                        <select className="form-select" aria-label="Default select example" name="sysDataKnownSystemReceiving" id="sysDataKnownSystemReceiving" value={data.sysDataKnownSystemReceiving} onChange={handleChange}>
                            <option value="1">Old system</option>
                            <option value="2">New system</option>
                        </select>
                        </div>

                        <div className="flex-col">
                        <div className="split-container">
                            <div className="flex-col">
                                <label htmlFor="systemName">
                                    List any systems to/from which data is being tranferred that 
                                    are not listed above.
                                </label>
                                <input
                                    type="text"
                                    id="sysDataSystemsList"
                                    name="sysDataSystemsList"
                                    placeholder=""
                                    pattern="([A-Z])[\w+.]{1,}"
                                    value={data.sysDataSystemsList}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        </div>

                        <br/>
                        <hr/>

                        <h4 className="section-title">Data Description</h4>

                            <div>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Will the system store, transfer, process or display any of the following?
                                </label>
                                <select className="form-select" aria-label="Default select example" name="dataDescription" id="dataDescription" value={data.dataDescription} onChange={handleChange}>
                                    <option value="1">DMV info</option>
                                    <option value="2">CA info</option>
                                    <option value="3">NYC info</option>
                                </select>
                                </div>

                    <br/>
                    <hr/>
                    
                    <h4 className="section-title">Fisa Data</h4>

                    <label htmlFor="sysFunction">Will the system store, tranfer, process or display RAW minimized FISA? (RAW FISA)?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="fisaRawMinimizedYes" name="fisaRawMinimizedYes" checked={data.fisaRawMinimizedYes} value={data.fisaRawMinimizedYes} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="fisaRawMinimizedNo" name="fisaRawMinimizedNo" checked={data.fisaRawMinimizedNo} value={data.fisaRawMinimizedNo} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            No
                        </label>
                    </div>

                    <label htmlFor="sysFunction">Will the system store, tranfer, process or display minimized FISA? (minimized FISA)?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="fisaMinimizedYes" name="fisaMinimizedYes" checked={data.fisaMinimizedYes} value={data.fisaMinimizedYes} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="fisaMinimizedNo" name="fisaMinimizedNo" checked={data.fisaMinimizedNo} value={data.fisaMinimizedNo} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            No
                        </label>
                    </div>

                    <br/>
                    <hr/>

                    <h4 className="section-title">Overlay Values</h4>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Availability
                    </label>
                    <select className="form-select" aria-label="Default select example" name="overlayAvailability" id="overlayAvailability" value={data.overlayAvailability} onChange={handleChange}>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                        <option value="3">Moderate</option>
                    </select>
                    </div>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Confidentiality
                        </label>
                        <select className="form-select" aria-label="Default select example" name="overlayConfidentiality" id="overlayConfidentiality" value={data.overlayConfidentiality} onChange={handleChange}>
                            <option value="1">High</option>
                            <option value="2">Low</option>
                            <option value="3">Moderate</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Integrity
                        </label>
                        <select className="form-select" aria-label="Default select example" name="overlayIntegrity" id="overlayIntegrity" value={data.overlayIntegrity} onChange={handleChange}>
                            <option value="1">High</option>
                            <option value="2">Low</option>
                            <option value="3">Moderate</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Overlay
                        </label>
                        <select className="form-select" aria-label="Default select example" name="overlayOverlay" id="overlayOverlay" value={data.overlayOverlay} onChange={handleChange}>
                            <option value="1">CDS</option>
                            <option value="2">Non-Access</option>
                            <option value="3">Transfer</option>
                            <option value="4">Multi-level</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Privacy
                        </label>
                        <select className="form-select" aria-label="Default select example" name="overlayPrivacy" id="overlayPrivacy" value={data.overlayPrivacy} onChange={handleChange}>
                            <option value="1">High</option>
                            <option value="2">Low</option>
                            <option value="3">Medium</option>
                            <option value="4">Non-Exempt</option>
                        </select>
                    </div>

                    <br/>
                    <hr/>
                
                    <h4 className="section-title">System POC</h4>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Alternate System Owner
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocAltSysOwner} onChange={handleChange}>
                        <option value="1">Analytics Settings Managers</option>
                        <option value="2">Application Development</option>
                        <option value="3">Problem Analyzers</option>
                        <option value="4">Business Application Registration Approval Group</option>
                        <option value="5">Nimsoft desk</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Sponsoring Org
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocSponsorOrg} onChange={handleChange}>
                        <option value="1">Org 1</option>
                        <option value="2">Org 2</option>
                        <option value="3">Org 3</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Developing Org
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocDevOrg} onChange={handleChange}>
                        <option value="1">Org 1</option>
                        <option value="2">Org 2</option>
                        <option value="3">Org 3</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        System owner
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocSysOwner} onChange={handleChange}>
                        <option value="1">CDS</option>
                        <option value="2">Non-Access</option>
                        <option value="3">Transfer</option>
                        <option value="4">Multi-level</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        ISSM Group
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocIssmGrp} onChange={handleChange}>
                        <option value="1">High</option>
                        <option value="2">Low</option>
                        <option value="3">Medium</option>
                        <option value="4">Non-Exempt</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Requested by
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocRequestedBy} onChange={handleChange}>
                        <option value="1">Bill Clinton</option>
                        <option value="2">Abraham Lincoln</option>
                        <option value="3">John Kennedy</option>
                        <option value="4">Harry Truman</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Authorizing Official
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocAuthOfficial} onChange={handleChange}>
                        <option value="1">Bill Clinton</option>
                        <option value="2">Abraham Lincoln</option>
                        <option value="3">John Kennedy</option>
                        <option value="4">Harry Truman</option>
                    </select>
                    </div>

                    <div>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Managing Org
                    </label>
                    <select className="form-select" aria-label="Default select example" value={data.sysPocManagingOrg} onChange={handleChange}>
                        <option value="1">Org 1</option>
                        <option value="2">Org 2</option>
                        <option value="3">Org 3</option>
                    </select>
                    </div> 

                    <br/>
                    <br/>

                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="form-cancel btn btn-danger control-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                            <div className="col-6">
                                <button type="submit" className="form-submit btn btn-primary control-btn" onClick={handleSaveApplication}>Save Application</button>
                            </div>
                        </div>
                    </div>
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

export default IntakeForm;
