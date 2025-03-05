const initialState = {
    auth: { token: localStorage.getItem('token') || null },
    tasks: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, auth: { token: action.payload } };
        case 'LOGIN_FAIL':
            return { ...state, auth: { token: null } };
        case 'FETCH_TASKS':
            return { ...state, tasks: action.payload };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};

export default rootReducer;
