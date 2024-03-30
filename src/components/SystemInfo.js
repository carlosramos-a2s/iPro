import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemInfo = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="sysName"><span className="input-required">*</span> System Name</label>
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
                    <label htmlFor="sysDescription"><span className="input-required">*</span> System Description</label>
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

            <label htmlFor="sysFunction"><span className="input-required">*</span> System function</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="sysFunction1" name="sysFunction1" value={data.sysFunction1} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Provide Open Source Analysis
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="sysFunction1" name="sysFunction2" value={data.sysFunction2} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Provide Technical Capabilities
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="sysFunction3" name="sysFunction3" value={data.sysFunction3} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Support Facility Infrastructure Services
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="sysFunction4" name="sysFunction4" value={data.sysFunction4} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Provide Signal Analysis
                </label>
            </div>
            
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    <span className="input-required">*</span> Which known system are you receiving data from?
                </label>
                <select className="form-select" aria-label="Default select example" id = "sysKnownSystem" name= "sysKnownSystem" value={data.sysKnownSystem} onChange={handleChange}>
                    <option value="1">1000 - 1099</option>
                    <option value="2">2000 - 2199</option>
                    <option value="3">3000 - 3199</option>
                </select>
            </div>
        </div>
    )

    return content
}
export default SystemInfo