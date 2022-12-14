import { createContext, useEffect, useState } from "react";

let BASE_URL= process.env.REACT_APP_SERVER_URL
export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUsername, setCurrentUsername] = useState(null)
    const [currentFollowing, setCurrentFollowing] = useState(null)
    

    useEffect(() =>{
        async function getLoggedInUser(){
            
            let response = await fetch(`${BASE_URL}api/users/check`, {
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
                setCurrentFollowing(data.user.Following)
            }
        }
            getLoggedInUser()
            
    }, [currentUser] )

    return (
        <CurrentUser.Provider value={{ currentUser, currentUsername, currentFollowing, setCurrentUser, setCurrentUsername, setCurrentFollowing }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider