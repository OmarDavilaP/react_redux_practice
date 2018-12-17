import React,{Component} from 'react';
import Formulary from './formulary';
import List from './List';
//third parti libraries
import { connect } from 'react-redux';

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

      handleDelete=({target:{id}})=>{

      this.props.executeDelete(id);

      }

    render(){
        return(
             <React.Fragment>
            <Formulary events={{onchange:this.handleOnChange,onsubmit:this.handleSubmit}}/>
            <List nameList={{info:this.props.testVar,ondelete:this.handleDelete}}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps=((state)=>{
    return {
      testVar:state.arrays
    }
});

const mapDispatchToProps=dispatch=>{

  return {
        executeAdd:({payload})=>dispatch({type:'ADD',payload}),
        executeDelete:(id)=>dispatch({type:'DELETE',payload:{first_name:id}})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ContainerForm);