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
                    <input className="form-check-input" type="radio" name="specSysSpaceYes" id="specSysSpaceYes" value={data.specSysSpaceYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="specSysSpaceNo" id="specSysSpaceNo" value={data.specSysSpaceNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Will wireless technologies be used as a part of the system?
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="specSysWirelessYes" id="specSysWirelessYes" value={data.specSysWirelessYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="specSysWirelessNo" id="specSysWirelessNo" value={data.specSysWirelessNo} onChange={handleChange} />
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