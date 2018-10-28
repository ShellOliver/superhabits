import actions from "../actions/action.types";

const { ADD_HABIT } = actions

const initialState = {
    habits: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABIT:
            return { ...state, habits: [...state.habits, action.payload] }
        default:
            return state
    }
}
