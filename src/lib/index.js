
let BASE_URL=process.env.REACT_APP_SERVER_URL


export async function logIn(credentials) {
    const response = await fetch(`${BASE_URL}users/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    console.log(BASE_URL)
    return response.json()
}

export async function signUp(credentials) {
    const response = await fetch(`${BASE_URL}api/users/signup/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
}

export async function displayBuds(currentUsername) {
    const response = await fetch(`${BASE_URL}api/users/user/${currentUsername}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}


export async function displaySearch(userSearch) {
    const response = await fetch(`${BASE_URL}api/users/search/${userSearch}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function saveFavorite(id){
    const response = await fetch(`${BASE_URL}api/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        },
        body: JSON.stringify(id)
    })
    return response.json()

}

export async function displayFavorite(id) {
    const response = await fetch(`${BASE_URL}api/favorites/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function displayComments(id) {
    const response = await fetch(`${BASE_URL}api/favorites/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function saveComment(id, comments){
    const response = await fetch(`${BASE_URL}api/comments/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        },
        body: JSON.stringify({'content':comments})
    })
    return response.json()

}


export async function deleteComment(id){
    const response = await fetch(`${BASE_URL}api/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        }
    })
    return response.json()
}

export async function editComment(id, comments){
    const response = await fetch(`${BASE_URL}api/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,  
        },
        body: JSON.stringify({'content':comments})
    })
    return response.json()
}

export async function profileInfo(username) {
    const response = await fetch(`${BASE_URL}api/users/user/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}` 
        },
    })
    return response.json()
}

export async function deleteBook(id){
    const response = await fetch(`${BASE_URL}api/favorites/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        }
    })
    return response.json()
}

export async function addFollower(id){
    
    const response = await fetch(`${BASE_URL}api/users/follow/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        },
        
    })
    return response.json()
}
export async function removeFollower(id){
    
    const response = await fetch(`${BASE_URL}api/users/follow/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        },
        
    })
    return response.json()
}