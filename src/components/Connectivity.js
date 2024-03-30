import useIntakeFormContext from "../hooks/useIntakeFormContext"

const Connectivity = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
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
            </div>

            <label htmlFor="sysFunction">Which networks will this system connect to? List all that apply.</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="connNetWork1" name="connNetWork1" value={data.connNetWork1} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    C2E
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="connNetWork2" name="connNetWork2" value={data.connNetWork2} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Open internet
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="connNetWork3" name="connNetWork3" value={data.connNetWork3} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Verizon
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="connNetWork4" name="connNetWork4" value={data.connNetWork4} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    A&A
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="connNetWork5" name="connNetWork5" value={data.connNetWork5} onChange={handleChange}/>
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
                    <input className="form-check-input" type="radio" name="connHighLowApprovalYes" id="connHighLowApprovalYes" value={data.connHighLowApprovalYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="connHighLowApprovalNo" id="connHighLowApprovalNo" value={data.connHighLowApprovalNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Is this system responsible htmlFor the security of any CDS?
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="connCdsSecResponsibilityYes" id="connCdsSecResponsibilityYes" value={data.connCdsSecResponsibilityYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="connCdsSecResponsibilityNo" id="connCdsSecResponsibilityNo" value={data.connCdsSecResponsibilityNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>

            <div className="flex-col">
                <div className="split-container">
                    <div className="flex-col">
                        <label htmlFor="systemName">Please Explain - no</label>
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
            </div>
        
        </>
    )

    return content
}
export default Connectivity