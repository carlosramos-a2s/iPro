import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemData = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Record classification
                </label>
                <select className="form-select" aria-label="Default select example" name="sysDataRecordClass" id="sysDataRecordClass" value={data.sysDataRecordClass} onChange={handleChange}>
                    <option value="1">Unclassified</option>
                    <option value="2">Secret</option>
                </select>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    At anytime will your system store, process or transmit actual production data??
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sysDataProdDataYes" id="sysDataProdDataYes" value={data.sysDataProdDataYes} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sysDataProdDataNo" id="sysDataProdDataNo" value={data.sysDataProdDataNo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
                </div>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Which known systems are you tranferring data to?
                </label>
                <select className="form-select" aria-label="Default select example" name="sysDataKnownSystemTransfer" id="sysDataKnownSystemTransfer" value={data.sysDataKnownSystemTransfer} onChange={handleChange}>
                    <option value="1">Old system</option>
                    <option value="2">New system</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Which known systems are you receiving data from?
                </label>
                <select className="form-select" aria-label="Default select example" name="sysDataKnownSystemReceiving" id="sysDataKnownSystemReceiving" value={data.sysDataKnownSystemReceiving} onChange={handleChange}>
                    <option value="1">Old system</option>
                    <option value="2">New system</option>
                </select>
            </div>

            <div className="flex-col">
                <div className="split-container">
                    <div className="flex-col">
                        <label htmlFor="systemName">
                            List any systems to/from which data is being tranferred that 
                            are not listed above.
                        </label>
                        <input
                            type="text"
                            id="sysDataSystemsList"
                            name="sysDataSystemsList"
                            placeholder=""
                            pattern="([A-Z])[\w+.]{1,}"
                            value={data.sysDataSystemsList}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        
        </>
    )

    return content
}
export default SystemData