import { createContext, useEffect, useState } from "react";

const urlBase = "http://localhost:5000/"
export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUsername, setCurrentUsername] = useState(null)
    const [currentFollowing, setCurrentFollowing] = useState(null)
    

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
                console.log(data.user.Following)
                setCurrentUser(data.user.firstName)
                setCurrentUsername(data.user.username)
                setCurrentFollowing(data.user.Following)
            }
        }
            getLoggedInUser()
            
    }, [] )

    return (
        <CurrentUser.Provider value={{ currentUser, currentUsername, currentFollowing, setCurrentUser, setCurrentUsername, setCurrentFollowing }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider