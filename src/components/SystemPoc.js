import useIntakeFormContext from "../hooks/useIntakeFormContext"

const SystemPoc = () => {

    const { data, handleChange } = useIntakeFormContext()

    const content = (
        <>
            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Alternate System Owner
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocAltSysOwner} onChange={handleChange}>
                    <option value="1">Analytics Settings Managers</option>
                    <option value="2">Application Development</option>
                    <option value="3">Problem Analyzers</option>
                    <option value="4">Business Application Registration Approval Group</option>
                    <option value="5">Nimsoft desk</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Sponsoring Org
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocSponsorOrg} onChange={handleChange}>
                    <option value="1">Org 1</option>
                    <option value="2">Org 2</option>
                    <option value="3">Org 3</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Developing Org
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocDevOrg} onChange={handleChange}>
                    <option value="1">Org 1</option>
                    <option value="2">Org 2</option>
                    <option value="3">Org 3</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    System owner
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocSysOwner} onChange={handleChange}>
                    <option value="1">CDS</option>
                    <option value="2">Non-Access</option>
                    <option value="3">Transfer</option>
                    <option value="4">Multi-level</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    ISSM Group
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocIssmGrp} onChange={handleChange}>
                    <option value="1">High</option>
                    <option value="2">Low</option>
                    <option value="3">Medium</option>
                    <option value="4">Non-Exempt</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Requested by
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocRequestedBy} onChange={handleChange}>
                    <option value="1">Bill Clinton</option>
                    <option value="2">Abraham Lincoln</option>
                    <option value="3">John Kennedy</option>
                    <option value="4">Harry Truman</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Authorizing Official
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocAuthOfficial} onChange={handleChange}>
                    <option value="1">Bill Clinton</option>
                    <option value="2">Abraham Lincoln</option>
                    <option value="3">John Kennedy</option>
                    <option value="4">Harry Truman</option>
                </select>
            </div>

            <div>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Managing Org
                </label>
                <select className="form-select" aria-label="Default select example" value={data.sysPocManagingOrg} onChange={handleChange}>
                    <option value="1">Org 1</option>
                    <option value="2">Org 2</option>
                    <option value="3">Org 3</option>
                </select>
            </div>
        
        </>
    )

    return content
}
export default SystemPoc