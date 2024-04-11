import useIntakeFormContext from "../hooks/useIntakeFormContext"

const PII = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            <div>
                <label className="form-check-label" htmlFor="piiDataAmount">
                    How much PII will  the system hold, transmit or process?
                </label>
                <select className="form-select" name="piiDataAmount" id="piiDataAmount" value={data.piiDataAmount} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Large number">Large number</option>
                    <option value="Substantial number">Substantial number</option>
                    <option value="Limited number">Limited number</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="piiDataType">
                    Which of the followoing personally identifiable information (PII) data fields will this system process,
                    store or transmit, including data htmlFor both US persons and foreign? Select all that apply.
                </label>
                <select className="form-select" name="piiDataType" id="piiDataType" value={data.piiDataType} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="A&A">A&A</option>
                    <option value="Travel PIT">Travel PIT</option>
                    <option value="Biometrics">Biometrics</option>
                    <option value="SSH">SSH</option>
                </select>
            </div>
            
        </>
    )

    return content
}
export default PII