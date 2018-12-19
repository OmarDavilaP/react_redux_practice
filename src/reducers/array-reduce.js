
import {updateObject} from '../store/utility/utility'

const initialState={}
const secondReducer =((state=initialState,action)=>{
        switch(action.type){
            case ("ADDGENDER"):
                return updateObject(state,{gender:action.payload})
}

        return state;
});

export default secondReducer;