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
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="nonUSDirectAccess" 
                        id="nonUSDirectAccessYes"
                        checked={data.nonUSDirectAccess === 'Yes'}  
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="nonUSDirectAccessYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="nonUSDirectAccess" 
                        id="nonUSDirectAccessNo" 
                        checked={data.nonUSDirectAccess === 'No'}  
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="nonUSDirectAccessNo">
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
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="nonUSReleasbleData" 
                        id="nonUSReleasbleDataYes" 
                        checked={data.nonUSReleasbleData === 'Yes'} 
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="nonUSReleasbleDataYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="nonUSReleasbleData" 
                        id="nonUSReleasbleDataNo"
                        checked={data.nonUSReleasbleData === 'No'}  
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="nonUSReleasbleDataNo">
                        No
                    </label>
                </div>
            </div>
            
        </>
    )

    return content
}
export default NonUsPersonnel