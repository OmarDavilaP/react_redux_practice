import * as actions from './actionTypes';


export const add =(payload)=>{

    const sendAdd=()=>({type:actions.ADD,payload});

    return dispatch=>{
        setTimeout(()=>{
            dispatch(sendAdd(payload))
        },1000);
    }
}

export const feedList=(payload)=>({type:actions.FEED,payload});

export const remove =(payload)=>({type:actions.DELETE,payload});

