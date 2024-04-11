import useIntakeFormContext from "../hooks/useIntakeFormContext"

const Connectivity = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Which option describes this systems connectivity model?
                </label>
                <select className="form-select" id="connModel" name="connModel" value={data.connModel} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Hosted on a network or enclave">Hosted on a network or enclave</option>
                    <option value="Appliance">Appliance</option>
                    <option value="Disconnected Enclave">Disconnected Enclave</option>
                    <option value="Stand Alone">Stand Alone</option>
                    <option value="General/Open Netowrk">General/Open Netowrk</option>
                    <option value="Connected Enclave">Connected Enclave</option>
                </select>
            </div>

            <label htmlFor="sysFunction">Which networks will this system connect to? List all that apply.</label>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="connC2EConnection" 
                    name="connC2EConnection" 
                    checked={data.connC2EConnection} 
                    value={data.connC2EConnection} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    C2E
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="connOpenIntConnection" 
                    name="connOpenIntConnection" 
                    checked={data.connOpenIntConnection} 
                    value={data.connOpenIntConnection} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Open internet
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="connVerizonConnection" 
                    name="connVerizonConnection" 
                    checked={data.connVerizonConnection} 
                    value={data.connVerizonConnection} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Verizon
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="connAAConnection" 
                    name="connAAConnection" 
                    checked={data.connAAConnection} 
                    value={data.connAAConnection} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    A&A
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="connCS2Connection" 
                    name="connCS2Connection" 
                    checked={data.connCS2Connection} 
                    value={data.connCS2Connection} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    CS2
                </label>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    How will these systems connect to the C2S?
                </label>
                <select className="form-select" aria-label="Default select example" id="connC2SConnectionType" name="connC2SConnectionType" value={data.connC2SConnectionType} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Standard Firewall">Standard Firewall</option>
                    <option value="C2E Firewall">C2E Firewall</option>
                    <option value="C2S Firewall">C2S Firewall</option>
                    <option value="Enterprise Network">Enterprise Network</option>
                    <option value="Non-Standard Firewall">Non-Standard Firewall</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    How will the systems be protected?
                </label>
                <select className="form-select" aria-label="Default select example" id="connSysProtection" name="connSysProtection" value={data.connSysProtection} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Tranfer CDS">Tranfer CDS</option>
                    <option value="Multilevel CDS">Multilevel CDS</option>
                    <option value="Access CDS">Access CDS</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    What type of CDS is the connection with the Navy?
                </label>
                <select className="form-select" aria-label="Default select example" id="connCDSConnectionTypeNavy" name="connCDSConnectionTypeNavy" value={data.connCDSConnectionTypeNavy} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Tranfer CDS">Tranfer CDS</option>
                    <option value="Multilevel CDS">Multilevel CDS</option>
                    <option value="Access CDS">Access CDS</option>
                </select>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="connHighLowApprovalYes">
                    Does this system move any data high to low via a CDS approval?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="connHighLowApproval" 
                        id="connHighLowApprovalYes" 
                        checked={data.connHighLowApproval === 'Yes'} 
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="connHighLowApprovalYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="connHighLowApproval" 
                        id="connHighLowApprovalNo" 
                        checked={data.connHighLowApproval === 'No'} 
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="connHighLowApprovalNo">
                        No
                    </label>
                </div>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Is this system responsible for the security of any CDS?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="connCdsSecResponsibility" 
                        id="connCdsSecResponsibilityYes" 
                        checked={data.connCdsSecResponsibility === 'Yes'} 
                        value="Yes" 
                        onChange={handleChange} />
                    <label className="form-check-label" htmlFor="connCdsSecResponsibilityYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="connCdsSecResponsibility" 
                        id="connCdsSecResponsibilityNo" 
                        checked={data.connCdsSecResponsibility === 'No'} 
                        value="No" 
                        onChange={handleChange} />
                    <label className="form-check-label" htmlFor="connCdsSecResponsibilityNo">
                        No
                    </label>
                </div>
            </div>

            <div className="flex-col">
                <div className="split-container">
                    <div className="flex-col">
                        <label htmlFor="systemName">Please Explain your answer</label>
                        <input
                            type="text"
                            id="connExplainNo"
                            name="connExplainNo"
                            placeholder=""
                            pattern="([A-Z])[\w+.]{1,}"
                            value={data.connExplainNo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        
        </>
    )

    return content
}
export default Connectivity