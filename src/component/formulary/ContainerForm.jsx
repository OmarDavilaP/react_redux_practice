import React,{Component} from 'react';
import Formulary from './formulary';
import List from './List';
//third parti libraries
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
//axios
import axios from 'axios';

class ContainerForm extends Component{

    constructor(){
        super();
        this.state={
          payload:{}
        }
      }

      handleSubmit=(e)=>{
        this.props.executeAdd(this.state);
        e.preventDefault();
      }
      
      handleOnChange=({target:{name,value}})=>{
        this.state.payload={...this.state.payload,
          [name]:value
        }
    
      }
      handleOnChangeRed2=({target:{value,name,id}})=>{
          this.props.addGender(id);
      }

      handleDelete=({target:{id}})=>{

      this.props.executeDelete(id);

      }

      componentDidMount=()=>{
        let feedPerson=[];
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
          res.data.map(({name,username})=>{
            return  feedPerson.push({first_name:name,last_name:username})
          });
              this.props.executeFeedList(feedPerson)
        });

      }

    render(){
        return(
             <React.Fragment>
            <Formulary events={{onchange:this.handleOnChange,onsubmit:this.handleSubmit,onchangerd2:this.handleOnChangeRed2}}/>
            <List nameList={{info:this.props.testVar,ondelete:this.handleDelete,gender:this.props.arrRD2}}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps=((state)=>{

    return {
      testVar:state.red1.arrays,
      arrRD2:state.red2.array2
    }
});

const mapDispatchToProps=dispatch=>{
  return {
        executeAdd:({payload})=>dispatch(actions.add(payload)),
        executeDelete:(id)=>dispatch(actions.remove({first_name:id})),
        addGender:(gender)=>dispatch(actions.addgender({gender})),
        executeFeedList:(payload)=>dispatch(actions.feedList(payload))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerForm);