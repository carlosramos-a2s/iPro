import useIntakeFormContext from "../hooks/useIntakeFormContext"

const PII = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    How much PII will  the system hold, transmit or process?
                </label>
                <select className="form-select" aria-label="Default select example" name="piiDataAmount" id="piiDataAmount" value={data.piiDataAmount} onChange={handleChange}>
                    <option value="1">Large number</option>
                    <option value="2">Substantial number</option>
                    <option value="3">Limited number</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Which of the followoing personally identifiable information (PII) data fields will this system process,
                    store or transmit, including data htmlFor both US persons and foreign? Select all that apply.
                </label>
                <select className="form-select" aria-label="Default select example" name="piiDataType" id="piiDataType" value={data.piiDataType} onChange={handleChange}>
                    <option value="1">A&A</option>
                    <option value="2">Travel PIT</option>
                    <option value="3">Biometrics</option>
                    <option value="4">SSH</option>
                </select>
            </div>
            
        </>
    )

    return content
}
export default PII