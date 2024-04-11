import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemInfo = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label><span className="input-required">*</span> System Name</label>
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
                <div className="flex-col">
                    <label><span className="input-required">*</span> System Description</label>
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

            <label><span className="input-required">*</span> System function</label>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="sysFunctOpenSourceAnalysis" 
                    name="sysFunctOpenSourceAnalysis" 
                    checked={data.sysFunctOpenSourceAnalysis} 
                    value={data.sysFunctOpenSourceAnalysis} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="sysFunctOpenSourceAnalysis">
                    Provide Open Source Analysis
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="sysFunctTechCapabilities" 
                    name="sysFunctTechCapabilities" 
                    checked= {data.sysFunctTechCapabilities} 
                    value={data.sysFunctTechCapabilities} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="sysFunctTechCapabilities">
                    Provide Technical Capabilities
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="sysFunctSupportInfraServices" 
                    name="sysFunctSupportInfraServices" 
                    checked={data.sysFunctSupportInfraServices} 
                    value={data.sysFunctSupportInfraServices} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="sysFunctSupportInfraServices">
                    Support Facility Infrastructure Services
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="sysFunctProvideSigAnalysis" 
                    name="sysFunctProvideSigAnalysis" 
                    checked={data.sysFunctProvideSigAnalysis} 
                    value={data.sysFunctProvideSigAnalysis} 
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="sysFunctProvideSigAnalysis">
                    Provide Signal Analysis
                </label>
            </div>
            
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    <span className="input-required">*</span> Which known system are you receiving data from?
                </label>
                <select className="form-select" id="sysKnownSystem" name="sysKnownSystem" value={data.sysKnownSystem} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="1000 - 1099">1000 - 1099</option>
                    <option value="2000 - 2199">2000 - 2199</option>
                    <option value="3000 - 3199">3000 - 3199</option>
                </select>
            </div>
        </div>
    )

    return content
}
export default SystemInfo