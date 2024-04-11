import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemPoc = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="sysPocAltSysOwner">
                    Alternate System Owner
                </label>
                <select className="form-select" id="sysPocAltSysOwner" name="sysPocAltSysOwner" value={data.sysPocAltSysOwner} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Analytics Settings Managers">Analytics Settings Managers</option>
                    <option value="Application Development">Application Development</option>
                    <option value="Problem Analyzers">Problem Analyzers</option>
                    <option value="Business Application Registration Approval Group">Business Application Registration Approval Group</option>
                    <option value="Nimsoft desk">Nimsoft desk</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocSponsorOrg">
                    Sponsoring Org
                </label>
                <select className="form-select" id="sysPocSponsorOrg" name="sysPocSponsorOrg" value={data.sysPocSponsorOrg} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Org 1">Org 1</option>
                    <option value="Org 2">Org 2</option>
                    <option value="Org 3">Org 3</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocDevOrg">
                    Developing Org
                </label>
                <select className="form-select" id="sysPocDevOrg" name="sysPocDevOrg" value={data.sysPocDevOrg} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Org 1">Org 1</option>
                    <option value="Org 2">Org 2</option>
                    <option value="Org 3">Org 3</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocSysOwner">
                    System owner
                </label>
                <select className="form-select" id="sysPocSysOwner" name="sysPocSysOwner" value={data.sysPocSysOwner} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="CDS">CDS</option>
                    <option value="Non-Access">Non-Access</option>
                    <option value="Transfer">Transfer</option>
                    <option value="Multi-level">Multi-level</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocIssmGrp">
                    ISSM Group
                </label>
                <select className="form-select" id="sysPocIssmGrp" name="sysPocIssmGrp" value={data.sysPocIssmGrp} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Non-Exempt">Non-Exempt</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocRequestedBy">
                    Requested by
                </label>
                <select className="form-select" id="sysPocRequestedBy" name="sysPocRequestedBy" value={data.sysPocRequestedBy} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="George Washington">George Washington</option>
                    <option value="Abraham Lincoln">Abraham Lincoln</option>
                    <option value="John Kennedy">John Kennedy</option>
                    <option value="Harry Truman">Harry Truman</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocAuthOfficial">
                    Authorizing Official
                </label>
                <select className="form-select" id="sysPocAuthOfficial" name="sysPocAuthOfficial" value={data.sysPocAuthOfficial} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="George Washington">George Washington</option>
                    <option value="Abraham Lincoln">Abraham Lincoln</option>
                    <option value="John Kennedy">John Kennedy</option>
                    <option value="Harry Truman">Harry Truman</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="sysPocManagingOrg">
                    Managing Org
                </label>
                <select className="form-select" id="sysPocManagingOrg" name="sysPocManagingOrg" value={data.sysPocManagingOrg} onChange={handleChange}>
                    <option selected>--Choose--</option> 
                    <option value="Org 1">Org 1</option>
                    <option value="Org 2">Org 2</option>
                    <option value="Org 3">Org 3</option>
                </select>
            </div>
        
        </>
    )

    return content
}
export default SystemPoc