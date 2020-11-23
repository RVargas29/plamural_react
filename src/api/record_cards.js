import { get } from "./fetch";

const addCategoryFilter = (category_filter) => {

    if(category_filter) {
        var value = null;
        switch (category_filter) {
            case "sobre":
                value = 3
                break;
            case "emprendimientos":
                value = 8
                break;
            case "emprendeurismo":
                value = 6
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