import React from 'react';
import { createContext, useState, useEffect } from "react";
const IntakeFormContext = createContext({});

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
        sysFunctOpenSourceAnalysis: false,
        sysFunctTechCapabilities: false,
        sysFunctSupportInfraServices: false,
        sysFunctProvideSigAnalysis: false,
        sysKnownSystem: "",
        connModel: "",
        connC2EConnection: false,
        connOpenIntConnection: false,
        connVerizonConnection: false,
        connAAConnection: false,
        connCS2Connection: false,
        connC2SConnectionType: "",
        connCDSConnectionTypeNavy:"",
        connCdsSecResponsibility: "",
        connExplainNo: "",
        intAuthoritativeDataStore: "",
        intDownstreamFunct: "",
        piiDataAmount: "",
        piiDataType: "",
        nonUSDirectAccess: "",
        nonUSReleasbleData: "",
        specSysSpace: "",
        specSysWireless: "",
        sysDataRecordClass: "",
        sysDataProdData: "",
        sysDataKnownSystemTransfer: "",
        sysDataKnownSystemReceiving: "",
        sysDataSystemsList: "",
        dataDescription: "",
        fisaRawMinimized: "",
        fisaMinimized: "",
        overlayAvailability: "",
        overlayConfidentiality: "",
        overlayIntegrity: "",
        overlayOverlay: "",
        overlayPrivacy: "",
        sysPocAltSysOwner: "",
        sysPocSponsorOrg: "",
        sysPocDevOrg: "",
        sysPocSysOwner: "",
        sysPocIssmGrp: "",
        sysPocRequestedBy: "",
        sysPocAuthOfficial: "",
        sysPocManagingOrg: ""
    });

    const canSubmit = 
        (data.sysName && data.sysDescription && data.sysKnownSystem) 
        && (data.sysFunctOpenSourceAnalysis || data.sysFunctTechCapabilities || data.sysFunctSupportInfraServices || data.sysFunctProvideSigAnalysis) 

     // const canSubmit = [...Object.values(data)].every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    const handleChange = e => {

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
        <IntakeFormContext.Provider value={{title, page, setPage, data, setData, handleChange, canSubmit, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </IntakeFormContext.Provider>
    )
}

export default IntakeFormContext            