import React from 'react';
import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect } from "react"
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;
const ListApplicationsContext = createContext({})


export const ListApplicationsProvider = ({children}) => {
    let userEmail = JSON.parse(window.localStorage.getItem('userEmail')) ? JSON.parse(window.localStorage.getItem('userEmail')) : 'placeholder';
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    
    const reqBody = {
        "requestEvent": "GET_APPLICATIONS",
        "requestBody": {
            "userEmail": userEmail
        }
    }

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            fetch(`${apiEndpoint}/getapps`, {
                    method: 'POST',
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(reqBody)
            })
            .then(response => response.json())
            .then(json => {
                if (Array.isArray(json)) {
                    setData(json) 
                }    
                
                setIsLoading(false); 
            })
        })();

        setIsLoading(false)

    }, []);

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <ListApplicationsContext.Provider value={{ data, isLoading, userEmail, handleChange }}>
            {children}
        </ListApplicationsContext.Provider>
    )
}

export default ListApplicationsContext 