import { get } from "./fetch";

export const getRecordCards = () => {
    return get('/api/record_cards');
}