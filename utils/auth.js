import axios from 'axios';

const API_KEY = 'AIzaSyChNTQw-w-mgAXOKwoaYYFF6DJ53KUZlxs';

async function authenticate(mode, email, password, name) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        name: name,
        returnSecureToken: true,
    });

    const token = response.data.idToken;

    return token;
}

export function createUser(email, password, name) {
    return authenticate('signUp', email, password, name);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}

export function emailVerification(email, password) {
    return authenticate('getOobConfirmationCode', email, password);
}
