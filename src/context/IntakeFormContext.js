import { createContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;
const IntakeFormContext = createContext({})

export const IntakeFormProvider = ({children}) => {
    const storedValue = JSON.parse(window.localStorage.getItem('projectName')) 
    
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
        <IntakeFormContext.Provider value={{ data, setData, handleChange }}>
            {children}
        </IntakeFormContext.Provider>
    )
}

export default IntakeFormContext            