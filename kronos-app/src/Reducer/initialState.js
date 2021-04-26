import {GET_USERS}  from '../actions/type'

const initialState = {
    title: 'Kronosシステム－掲示板表示',
    UserStatusSelection: {
        In:'出',
        Out:'退',
        Leave: '休'
    }
};


export default function initialStateReducer(state = initialState, action) {
    switch(action.type){
        case GET_USERS:
            return { 
            ...state,
                 myvalue:action.payload    
            } 
        default:
             return state
    }
　
    
}

