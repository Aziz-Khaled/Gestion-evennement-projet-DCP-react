import {SIGNUP , LOGIN , GETMEMBERS  , DISPLAYINGEVENTS ,  ADDEVENT} from '../actionType/action-type'
import axios from 'axios'


export const signUp = (data) => async (dispatch) => {
    console.log(data)
    try {
        const signUp = await axios.post ("http://localhost:5000/signUp" , data) ;
        dispatch ({
            type: SIGNUP , 
            payload: signUp, 
            
        })
localStorage.setItem('token', signUp.data.token)

    } catch (error) {
        console.log( "msg d'erreur : " , error)
    }
}



export const LogInMember = (data) => async (dispatch) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' 
    console.log(data)
    try {
        const login = await axios.post ("http://localhost:5000/logIn" , data) ;
        dispatch ({
            type: LOGIN , 
            payload: login,
        })
        dispatch(CurrentMember(login.data.token))
localStorage.setItem('token', login.data.token)
    } catch (error) {
        console.log( "msg d'erreur : " , error)
    } }


    export const CurrentMember = (token) => async (dispatch) => {
        const config={  
            headers:{           
            Authorization: token 
                    }}
        try {
            const getMember = await axios.get('http://localhost:5000/currentMembers',config)
            dispatch(
                {            
                    type : GETMEMBERS ,
                    payload : getMember.data
                }
            )
            localStorage.setItem('current_user',JSON.stringify(getMember.data))
        } catch (error) {
            console.log(error)
        }
    }
    

export const displayingEvents = () => async (dispatch) => {
   try {
    
    const displayEvent = await axios.get('http://localhost:5000/displayevents')
    dispatch ({ 
        type : DISPLAYINGEVENTS , 
        payload : displayEvent.data.allEvents
    })


   } catch (error) {
    console.error(error)
   } 
}





export const addNewEvent = (data) => async (dispatch) => {
  
    
    try {
        const newEvent = await axios.post ("http://localhost:5000/postEvent" , data) ;
        dispatch ({
            type: ADDEVENT , 
            payload: newEvent.data,
        })
        
    } catch (error) {
        console.log( "msg d'erreur : " , error)
    } }

