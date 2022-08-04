import { UPDATE, SELECTED_ITEM } from "./actionType";

export const update = (payload) => {
    return {
        type: UPDATE,
        payload: payload,
    };
}

export const selectedItem = (payload) => {
    return {
        type: SELECTED_ITEM,
        payload: payload,
    };
}