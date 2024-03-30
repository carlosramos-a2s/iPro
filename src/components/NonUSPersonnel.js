import useIntakeFormContext from "../hooks/useIntakeFormContext"

const NonUsPersonnel = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            
            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Will this system allow any direct or indirect access to non-US users?
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={data.nonUSDirectAccessYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={data.nonUSDirectAccessNo} onChange={handleChange} />
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
                    <input className="form-check-input" type="radio" name="nonUSReleasbleDataYes" id="nonUSReleasbleDataYes" value={data.nonUSReleasbleDataYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="nonUSReleasbleDataNo" id="nonUSReleasbleDataNo" value={data.nonUSReleasbleDataNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>
            
        </>
    )

    return content
}
export default NonUsPersonnel