import React from 'react';
import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;
const IntakeFormContext = createContext({})

export const IntakeFormProvider = ({children}) => {
   
    const title = {
        0: 'System Info',
        1: 'Connectivity',
        2: 'Integrity & Availability',
        3: 'PII',
        4: 'Non-US Personnel',
        5: 'Specialty Systems',
        6: 'System Data',
        7: 'Data Description', 
        8: 'Fisa Data',
        9: 'Overlay Values',
        10: 'System POC'
    }

    const [page, setPage] = useState(0)
    
    const [data, setData] = useState({
        sysName: "",
        sysDescription: "",
        sysFunction1: "",
        sysFunction2: "",
        sysFunction3: "",
        sysFunction4: "",
        sysKnownSystem: "",
        connModel: "",
        connNetWork1: "",
        connNetWork2: "",
        connNetWork3: "",
        connNetWork4: "",
        connNetWork5: "",
        connC2S: "",
        connNavyCDS: "",
        connHighLowApprovalYes: "",
        connHighLowApprovalNo: "",
        connCdsSecResponsibilityYes: "",
        connCdsSecResponsibilityNo: "",
        connNoCDS: "",
        intAuthoritativeDataStoreYes: "",
        intAuthoritativeDataStoreNo: "",
        intDownstreamFunctYes: "",
        intDownstreamFunctNo: "",
        piiDataAmount: "",
        piiDataType: "",
        nonUSDirectAccessYes: "",
        nonUSDirectAccessNo: "",
        nonUSReleasbleDataYes: "",
        nonUSReleasbleDataNo: "",
        specSysSpaceYes: "",
        specSysSpaceNo: "",
        specSysWirelessYes: "",
        specSysWirelessNo: "",
        sysDataRecordClass: "",
        sysDataProdDataYes: "",
        sysDataProdDataNo: "",
        sysDataKnownSystemTransfer: "",
        sysDataKnownSystemReceiving: "",
        sysDataSystemsList: "",
        dataDescription: "",
        fisaRawMinimizedYes: "",
        fisaRawMinimizedNo: "",
        fisaMinimizedYes: "",
        fisaMinimizedNo: "",
        overlayAvailability: "",
        overlayConfidentiality: "",
        overlayIntegrity: "",
        overlayOverlay: "",
        overlayPrivacy: "",
        sysConnectivityModel: "",
        sysPocAltSysOwner: "",
        sysPocSponsorOrg: "",
        sysPocDevOrg: "",
        sysPocSysOwner: "",
        sysPocIssmGrp: "",
        sysPocRequestedBy: "",
        sysPocAuthOfficial: "",
        sysPocManagingOrg: ""
    });

    // const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
    .filter(key => key.startsWith('bill') && key !== 'billAddress2')
    .map(key => data[key])
    .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('ship') && key !== 'shipAddress2')
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    //Change made to enable previous and next buttons.
    const disableNext =
        (page === Object.keys(title).length - 1)
        // || (page === 0 && !canNextPage1)
        // || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    const handleChange = e => {
        console.log(e.target.name);

        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        const newData = {
            ...data,
            [name]: value
        }
        
        setData(newData)
    }

    return (
        <IntakeFormContext.Provider value={{title, page, setPage, data, setData, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </IntakeFormContext.Provider>
    )
}

export default IntakeFormContext            