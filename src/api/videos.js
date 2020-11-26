import { get } from "./fetch";

export const getVideos = () => {
    return get('/api/videos');
}