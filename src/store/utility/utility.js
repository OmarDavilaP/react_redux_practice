export const updateObject=(currentState,updatedValues)=>{
        return{
            ...currentState,
            ...updatedValues
        }
}