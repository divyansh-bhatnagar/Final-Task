import {UPDATE, SELECTED_ITEM} from './actionType';

const initialState = {
    selecteditems: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case UPDATE:
        //     return {
        //         ...state,
        //         selecteditem: action.payload,
        //     }
        case SELECTED_ITEM:
            const updatedSelectedItems = [...state.selecteditems, action.payload];
            return {
                ...state,
                selecteditems: updatedSelectedItems,
            }
        default:
            return state;
    }
}