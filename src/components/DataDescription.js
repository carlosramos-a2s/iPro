import useIntakeFormContext from "../hooks/useIntakeFormContext"

const DataDescription = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>         
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Will the system store, transfer, process or display any of the following?
                </label>
                <select className="form-select" aria-label="Default select example" name="dataDescription" id="dataDescription" value={data.dataDescription} onChange={handleChange}>
                    <option value="1">DMV info</option>
                    <option value="2">CA info</option>
                    <option value="3">NYC info</option>
                </select>
            </div>

        </>
    )

    return content
}
export default DataDescription