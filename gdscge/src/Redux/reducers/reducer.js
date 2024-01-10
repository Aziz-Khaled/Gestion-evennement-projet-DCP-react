import {SIGNUP , LOGIN ,GETMEMBERS , DISPLAYINGEVENTS , ADDEVENT} from '../actionType/action-type'


const initialState ={ 
    members : {} , 
    membersLogIn : {} , 
    events: [],
    currentMember : {} ,   
    newEvent : {}
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                members: action.payload
            } ; 

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

                case DISPLAYINGEVENTS:
                    return {
                        ...state,
                        events: action.payload
                    }  ;

                case ADDEVENT:
                    return {
                        ...state,
                        newEvent: action.payload
                    }
        default:
            return state;
    }
};

export default contactReducer;
