import {SIGNUP , LOGIN ,GETMEMBERS } from '../actionType/action-type'
import axios from 'axios'

export const signUp = (data , History) => async (dispatch) => {
            console.log(data)
    try {
        const signUp = await axios.post ("http://localhost:5000/signUp" , data) ;
        dispatch ({
            type: SIGNUP , 
            payload: signUp, 
            
        })
localStorage.setItem('token', signUp.data.token)
History.push('/HomePage')
    } catch (error) {
        console.log( "msg d'erreur : " , error)
    }
}