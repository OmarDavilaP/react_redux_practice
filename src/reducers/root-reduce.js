const initialState={
    data:'something',
    arrays:[]
}

const reducer = ((state=initialState,action)=>{

    switch (action.type){

        case ("ADD"):
           return{
               arrays:state.arrays.concat(action.payload)
           }
        case ("DELETE"):
           console.log("PAYLOAD DELETE",action.payload)
          const newArr= state.arrays.filter(res=>{
               return res.first_name!=action.payload.first_name
           })
           console.log("newArr",newArr)
        return{ 
            arrays:newArr
        }    
    }

    return state;
});

export default reducer;