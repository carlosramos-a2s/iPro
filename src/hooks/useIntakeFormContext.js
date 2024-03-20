import { useContext } from "react"
import IntakeFormContext from "../context/IntakeFormContext"

const useIntakeFormContext = () => {
    return useContext(IntakeFormContext)
}

export default useIntakeFormContext