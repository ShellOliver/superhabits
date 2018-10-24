import actions from "../actions/action.types";

const { ADD_HABIT } = actions

const initialState = {
    habits: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABIT:
            return add(state, action)
        default:
            return state
    }
}

const add = (state, action) => {
    return { ...state, habits: [...state.habits, action.payload] };
}
