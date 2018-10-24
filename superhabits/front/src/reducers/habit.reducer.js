import actions from "../actions/action.types";

const { ADD_HABIT } = actions

export default (state, action) => {
    switch (action.type) {
        case ADD_HABIT:
            return add(state, action)
        default:
            break;
    }
}

const add = (state, action) => {
    return { ...state, habits: [...state.habits, action.payload] };
}
