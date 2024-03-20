import { createContext, useState, useEffect } from "react"

const NewAppContext = createContext({})

export const NewAppProvider = ({children}) => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        userEmail: "",
        companyName: "",
        projectName: ""
    })

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        const newData = {
            ...data,
            [name]: value
        }
        
        setData(newData)
    }

    return (
        <NewAppContext.Provider value={{ data, handleChange }}>
            {children}
        </NewAppContext.Provider>
    )
}

export default NewAppContext