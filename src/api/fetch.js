import { apiUrl as apiUrl } from '../app.json';

const getHeaders = async () => {
    const headers = {
        'Accept':'application/json',
        'Content-Type': 'application/json'
    }
    return headers;
}

export const post = async (destination, body) => {
    const headers = await getHeaders();

    const result = await fetch(`${apiUrl}${destination}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });

    if(result.ok) {
        return await result.json();
    }
    throw { error: result.status };
}

export const get = async (destination) => {
    const headers = await getHeaders();

    const result = await fetch(`${apiUrl}${destination}`, {
        method: 'GET',
        headers: headers
    });

    if(result.ok) {
        return await result.json();
    }
    throw { error: result.status };
}
