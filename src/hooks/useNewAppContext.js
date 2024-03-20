import { useContext } from "react"
import NewAppContext from "../context/NewAppContext"

const useNewAppContext = () => {
    return useContext(NewAppContext)
}

export default useNewAppContext