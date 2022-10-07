
const urlBase = "http://localhost:5000/"

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
