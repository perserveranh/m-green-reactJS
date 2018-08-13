var initialState = {
    category: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATE":
            return Object.assign({}, state, { category: action.category })
        default:
            return state;
    }
}

export default categoryReducer;