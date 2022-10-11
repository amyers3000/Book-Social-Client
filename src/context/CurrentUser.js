import { createContext, useEffect, useState } from "react";

const urlBase = "http://localhost:5000/"
export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUsername, setCurrentUsername] = useState(null)
    

    useEffect(() =>{
        async function getLoggedInUser(){
            let response = await fetch(`${urlBase}users/check`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
            let data = await response.json()
            if(data.message === "unauthorized"){
                return
            }else{
                setCurrentUser(data.user.firstName)
                setCurrentUsername(data.user.username)
            }
        }
            getLoggedInUser()
            
    }, [] )

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser, setCurrentUsername, currentUsername }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider