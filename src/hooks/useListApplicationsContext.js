import { useContext } from "react"
import ListApplicationsContext from "../context/ListApplicationsContext"

const useListApplicationsContext = () => {
    return useContext(ListApplicationsContext)
}

export default useListApplicationsContext