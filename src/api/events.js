import { get } from "./fetch";

export const getHomeEvents = () => {
    return get('/api/events/home');
}

export const getEvents = () => {
    return get('/api/events/');
}