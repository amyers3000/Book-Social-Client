


export async function logIn(credentials) {
    const response = await fetch(`http://localhost:5000/users/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
}

export async function signUp(credentials) {
    const response = await fetch(`http://localhost:5000/users/signup/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json()
}

export async function displayBuds(currentUsername) {
    const response = await fetch(`http://localhost:5000/users/user/${currentUsername}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}


export async function displaySearch(userSearch) {
    const response = await fetch(`http://localhost:5000/users/search/${userSearch}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function saveFavorite(id){
    const response = await fetch(`http://localhost:5000/books`, {
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
    const response = await fetch(`http://localhost:5000/favorites/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function displayComments(id) {
    const response = await fetch(`http://localhost:5000/favorites/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    return await response.json()
}

export async function saveComment(id, comments){
    const response = await fetch(`http://localhost:5000/comments/${id}`, {
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
    const response = await fetch(`http://localhost:5000/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,
            
        }
    })
    return response.json()
}

export async function editComment(id, comments){
    const response = await fetch(`http://localhost:5000/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`,  
        },
        body: JSON.stringify({'content':comments})
    })
    return response.json()
}