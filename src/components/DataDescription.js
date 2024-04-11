import useIntakeFormContext from "../hooks/useIntakeFormContext"

const DataDescription = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            <div>
                <label className="form-check-label" htmlFor="dataDescription">
                    Will the system store, transfer, process or display any of the following?
                </label>
                <select className="form-select" aria-label="Default select example"  id="dataDescription" name="dataDescription" value={data.dataDescription} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="DMV info">DMV info</option>
                    <option value="CA info">CA info</option>
                    <option value="NYC info">NYC info</option>
                </select>
            </div>

        </>
    )

    return content
}
export default DataDescription