import { get } from "./fetch";

export const getHomeEvents = () => {
    return get('/api/events/home');
}

export const getEvents = (page="list") => {
    switch (page) {
        case "home":
            return get('/api/events/home');
        default:
            return get('/api/events/');
    }
}