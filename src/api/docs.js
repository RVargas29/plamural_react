import { get } from "./fetch";

export const getDocuments = () => {
    return get('/api/repo');
}