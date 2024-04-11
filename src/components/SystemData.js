import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemData = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="sysDataRecordClass">
                    Record classification
                </label>
                <select className="form-select" name="sysDataRecordClass" id="sysDataRecordClass" value={data.sysDataRecordClass} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Unclassified">Unclassified</option>
                    <option value="Secret">Secret</option>
                </select>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    At anytime will your system store, process or transmit actual production data??
                </label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sysDataProdData" 
                        id="sysDataProdDataYes"
                        checked={data.sysDataProdData === 'Yes'}  
                        value="Yes" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="sysDataProdDataYes">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="sysDataProdData" 
                        id="sysDataProdDataNo" 
                        checked={data.sysDataProdData === 'No'}  
                        value="No" 
                        onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="sysDataProdDataNo">
                        No
                    </label>
                </div>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysDataKnownSystemTransfer">
                    Which known systems are you tranferring data to?
                </label>
                <select className="form-select" name="sysDataKnownSystemTransfer" id="sysDataKnownSystemTransfer" value={data.sysDataKnownSystemTransfer} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Old system">Old system</option>
                    <option value="New system">New system</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Which known systems are you receiving data from?
                </label>
                <select className="form-select" name="sysDataKnownSystemReceiving" id="sysDataKnownSystemReceiving" value={data.sysDataKnownSystemReceiving} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Old system">Old system</option>
                    <option value="New system">New system</option>
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