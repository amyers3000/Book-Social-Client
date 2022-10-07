import { createContext, useEffect, useState } from "react";

const urlBase = "http://localhost:5000/"
export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    console.log(`${urlBase}users/user/check`)

    useEffect(() =>{
        async function getLoggedInUser(){
            let response = await fetch(`${urlBase}users/check`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
            let data = await response.json()
            console.log(data.user)
            if(data.message == "unauthorized"){
                return
            }else{
                setCurrentUser(data.user.firstName)
            }
        }
            getLoggedInUser()
            
    }, [] )

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider