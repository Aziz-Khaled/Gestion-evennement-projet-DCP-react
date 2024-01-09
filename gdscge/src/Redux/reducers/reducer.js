import {SIGNUP , LOGIN ,GETMEMBERS } from '../actionType/action-type'


const initialState ={ 
    members : {} , 
    membersLogIn : {}
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                members: action.payload
            }
            case LOGIN:
            return {
                ...state,
                membersLogIn: action.payload
            };
            case GETMEMBERS:
                return {
                    ...state,
                    currentMember: action.payload
                };
        default:
            return state;
    }
};

export default contactReducer;
