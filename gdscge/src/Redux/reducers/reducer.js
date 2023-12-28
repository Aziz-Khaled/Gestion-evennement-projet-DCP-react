import {SIGNUP , LOGIN ,GETMEMBERS } from '../actionType/action-type'


const initialState ={ 
    members : {}
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            
            return {
                ...state,
                members: action.payload
            };
        default:
            return state;
    }
};

export default contactReducer;
