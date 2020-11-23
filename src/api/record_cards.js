import { get } from "./fetch";

const addCategoryFilter = (category_filter) => {

    if(category_filter) {
        var value = null;
        switch (category_filter) {
            case "sobre":
                value = 1
                break;
            case "emprendimientos":
                value = 2
                break;
            case "emprendeurismo":
                value = 3
                break;
            default:
                break;
        }
        return value
    }

    return "";
}

export const getRecordCards = (category_filter = null) => {
    var base_url = '/api/record_cards/' + addCategoryFilter(category_filter);
    return get(base_url);
}