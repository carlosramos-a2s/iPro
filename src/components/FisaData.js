import useIntakeFormContext from "../hooks/useIntakeFormContext"

const FisaData = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div className="form-check">
                <label className="form-check-label">
                    Will the system store, tranfer, process or display RAW minimized FISA? (RAW FISA)?
                </label>
                <div className="form-check">
                    <input
                        className="form-check-input" 
                        type="radio" 
                        name="fisaRawMinimized" 
                        id="fisaRawMinimizedYes" 
                        checked={data.fisaRawMinimized === 'Yes'} 
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="fisaRawMinimizedYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="fisaRawMinimized" 
                        id="fisaRawMinimizedNo" 
                        checked={data.fisaRawMinimized === 'No'} 
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="fisaRawMinimizedNo">
                        No
                    </label>
                </div>
            </div>

            <div className="form-check">
                <label className="form-check-label">
                    Will the system store, tranfer, process or display minimized FISA? (minimized FISA)?
                </label>
                <div className="form-check">
                    <input
                        className="form-check-input" 
                        type="radio" 
                        name="fisaMinimized" 
                        id="fisaMinimizedYes"
                        checked={data.fisaMinimized === 'Yes'} 
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="fisaMinimizedYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="fisaMinimized" 
                        id="fisaMinimizedNo" 
                        checked={data.fisaMinimized === 'No'} 
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="fisaMinimizedNo">
                        No
                    </label>
                </div>
            </div>
        </>
    )

    return content
}
export default FisaData