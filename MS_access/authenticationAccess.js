const fetch = require('node-fetch');

async function loginAuthentication(userCredentials) {
    try {
        const response = await fetch('http://35.208.124.181:8060/user/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials),
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result.token;

    } catch (err) {
        console.log(err);
    }
}

async function authGetAllUsers(token) {
    try {
        const response = await fetch('http://35.208.124.181:8060/user/', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.log(err);
    }
}

async function authGetUserById(id, token) {
    try {
        const response = await fetch(`http://35.208.124.181:8060/user/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.log(err);
    }
}

async function authCreateUser(userDataToCreate, token) {
    try {
        const response = await fetch('http://35.208.124.181:8060/user/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userDataToCreate),
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.log(err);
    }
}

async function authUpdateUser(id, userDataToUpdate, token) {
    try {
        const response = await fetch(`http://35.208.124.181:8060/user/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userDataToUpdate),
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response;
        return result.status;

    } catch (err) {
        console.log(err);
    }
}

async function authDeleteUser(id, token) {
    try {
        const response = await fetch(`http://35.208.124.181:8060/user/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response;
        return result.status;

    } catch (err) {
        console.log(err);
    }
}

module.exports = { loginAuthentication, authGetAllUsers, authGetUserById, authCreateUser, authUpdateUser, authDeleteUser }