import useIntakeFormContext from "../hooks/useIntakeFormContext"

const OverlayValues = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="overlayAvailability">
                    Availability
                </label>
                <select className="form-select" name="overlayAvailability" id="overlayAvailability" value={data.overlayAvailability} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="overlayConfidentiality">
                    Confidentiality
                </label>
                <select className="form-select" name="overlayConfidentiality" id="overlayConfidentiality" value={data.overlayConfidentiality} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="overlayIntegrity">
                    Integrity
                </label>
                <select className="form-select" name="overlayIntegrity" id="overlayIntegrity" value={data.overlayIntegrity} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="overlayOverlay">
                    Overlay
                </label>
                <select className="form-select" name="overlayOverlay" id="overlayOverlay" value={data.overlayOverlay} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="CDS">CDS</option>
                    <option value="Non-Access">Non-Access</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Multi-level">Multi-level</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="overlayPrivacy">
                    Privacy
                </label>
                <select className="form-select" name="overlayPrivacy" id="overlayPrivacy" value={data.overlayPrivacy} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Non-Exempt">Non-Exempt</option>
                </select>
            </div>
        
        </>
    )

    return content
}
export default OverlayValues