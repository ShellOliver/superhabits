import actionTypes from "./action.types";

const add = (payload) => {
    return {type: actionTypes.ADD_HABIT, payload}
}

export { add }