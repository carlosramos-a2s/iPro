import useIntakeFormContext from "../hooks/useIntakeFormContext"

const IntegrtityAvailability = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>

            <div className="form-check">
                <label className="form-check-label">
                    Will this system be an authoritative data store?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="intAuthoritativeDataStore" 
                        id="intAuthoritativeDataStoreYes"
                        checked={data.intAuthoritativeDataStore === 'Yes'}  
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="intAuthoritativeDataStore">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="intAuthoritativeDataStore" 
                        id="intAuthoritativeDataStoreNo" 
                        checked={data.intAuthoritativeDataStore === 'No'}  
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="intAuthoritativeDataStore">
                        No
                    </label>
                </div>
            </div>

            
            <div>
                <label className="form-check-label" htmlFor="intContDowntime">
                    How much continuous downtime will the system tolerate in production?
                </label>
                <select className="form-select" id="intContDowntime" name="intContDowntime" value={data.intContDowntime} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="One hour or less">One hour or less</option>
                    <option value="Over an hour up to 24 hours">Over an hour up to 24 hours</option>
                    <option value="Over 24 hours">Over 24 hours</option>
                </select>
            </div>

            <div className="form-check">
                <label className="form-check-label">
                    Will this system, its users, or downstream systems be unable to function if this system's data is corrupted or lost?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="intDownstreamFunct" 
                        id="intDownstreamFunctYes"
                        checked={data.intDownstreamFunct === 'Yes'}  
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="intDownstreamFunctYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="intDownstreamFunct" 
                        id="intDownstreamFunctNo" 
                        checked={data.intDownstreamFunct === 'No'}  
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="intDownstreamFunctNo">
                        No
                    </label>
                </div>
            </div>
            
        </>
    )

    return content
}
export default IntegrtityAvailability