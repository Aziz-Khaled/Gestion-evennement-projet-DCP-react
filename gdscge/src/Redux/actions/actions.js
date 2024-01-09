import {SIGNUP , LOGIN , GETMEMBERS } from '../actionType/action-type'
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
    console.log(data)
    try {
        const login = await axios.post ("http://localhost:5000/logIn" , data) ;
        dispatch ({
            type: LOGIN , 
            payload: login, 
            
        })

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
    