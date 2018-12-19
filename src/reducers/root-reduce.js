import {updateObject} from '../store/utility/utility'

const initialState={
    data:'something',
    arrays:[]
}

const deletePerson=(state,action)=>{
    const newArr= state.arrays.filter(res=> res.first_name!=action.payload.first_name);
    return updateObject(state,{arrays:newArr});
}

const reducer = ((state=initialState,action)=>{
    switch (action.type){

        case ("ADD"):
               return updateObject(state,{arrays:state.arrays.concat(action.payload)});
        case ("DELETE"):
               return deletePerson(state,action)
        case("FEED"):
                return updateObject(state,{arrays:action.payload});
    }
    return state;
});

export default reducer;