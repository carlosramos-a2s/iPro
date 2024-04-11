import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SpecialtySytems = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            
            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Is this system a space platform?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="specSysSpace" 
                        id="specSysSpaceYes" 
                        checked={data.specSysSpace === 'Yes'}
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="specSysSpaceYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="specSysSpace" 
                        id="specSysSpaceNo"
                        checked={data.specSysSpace === 'No'} 
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="specSysSpaceNo">
                        No
                    </label>
                </div>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Will wireless technologies be used as a part of the system?
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="specSysWireless" 
                        id="specSysWirelessYes"
                        checked={data.specSysWireless === 'Yes'}  
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="specSysWirelessYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="specSysWireless" 
                        id="specSysWirelessNo" 
                        checked={data.specSysWireless === 'No'}
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>
            
        </>
    )

    return content
}
export default SpecialtySytems