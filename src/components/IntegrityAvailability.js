import useIntakeFormContext from "../hooks/useIntakeFormContext"

const IntegrtityAvailability = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <label htmlFor="sysFunction">Will this system be an authoritative data store?</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="intAuthoritativeDataStoreYes" name="intAuthoritativeDataStoreYes" value={data.intAuthoritativeDataStoreYes} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Yes
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="intAuthoritativeDataStoreNo" name="intAuthoritativeDataStoreNo" value={data.intAuthoritativeDataStoreNo} onChange={handleChange}/>
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
                    <input className="form-check-input" type="radio" name="intDownstreamFunctYes" id="intDownstreamFunctYes" value={data.intDownstreamFunctYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="intDownstreamFunctNo" id="intDownstreamFunctNo" value={data.intDownstreamFunctNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>
            
        </>
    )

    return content
}
export default IntegrtityAvailability