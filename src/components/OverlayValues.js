import useIntakeFormContext from "../hooks/useIntakeFormContext"

const OverlayValues = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Availability
                </label>
                <select className="form-select" aria-label="Default select example" name="overlayAvailability" id="overlayAvailability" value={data.overlayAvailability} onChange={handleChange}>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                    <option value="3">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Confidentiality
                </label>
                <select className="form-select" aria-label="Default select example" name="overlayConfidentiality" id="overlayConfidentiality" value={data.overlayConfidentiality} onChange={handleChange}>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                    <option value="3">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Integrity
                </label>
                <select className="form-select" aria-label="Default select example" name="overlayIntegrity" id="overlayIntegrity" value={data.overlayIntegrity} onChange={handleChange}>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                    <option value="3">Moderate</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Overlay
                </label>
                <select className="form-select" aria-label="Default select example" name="overlayOverlay" id="overlayOverlay" value={data.overlayOverlay} onChange={handleChange}>
                    <option value="1">CDS</option>
                    <option value="2">Non-Access</option>
                    <option value="3">Transfer</option>
                    <option value="4">Multi-level</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Privacy
                </label>
                <select className="form-select" aria-label="Default select example" name="overlayPrivacy" id="overlayPrivacy" value={data.overlayPrivacy} onChange={handleChange}>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                    <option value="3">Medium</option>
                    <option value="4">Non-Exempt</option>
                </select>
            </div>
        
        </>
    )

    return content
}
export default OverlayValues