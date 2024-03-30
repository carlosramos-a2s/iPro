import useIntakeFormContext from "../hooks/useIntakeFormContext"

const FisaData = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <label htmlFor="sysFunction">Will the system store, tranfer, process or display RAW minimized FISA? (RAW FISA)?</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fisaRawMinimizedYes" name="fisaRawMinimizedYes" value={data.fisaRawMinimizedYes} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Yes
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fisaRawMinimizedNo" name="fisaRawMinimizedNo" value={data.fisaRawMinimizedNo} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    No
                </label>
            </div>

            <label htmlFor="sysFunction">Will the system store, tranfer, process or display minimized FISA? (minimized FISA)?</label>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fisaMinimizedYes" name="fisaMinimizedYes" value={data.fisaMinimizedYes} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Yes
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fisaMinimizedNo" name="fisaMinimizedNo" value={data.fisaMinimizedNo} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    No
                </label>
            </div>
        </>
    )

    return content
}
export default FisaData