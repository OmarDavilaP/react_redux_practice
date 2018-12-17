import React, { Component } from 'react';

const Formulary=({events:{onsubmit,onchange}})=>{
    return(
        <div className="container">
        <form onSubmit={onsubmit}>
        <div className="form-group mb-2">
        <label 
               className="col-2 col-form-label"> Name: </label>
        <input  
              name="first_name" 
              className="col-3" 
              type="text"
              onChange={onchange}
              />
         </div>
         <div className="form-group mb-2">
        <label className="col-2 col-form-label"> Last Name:</label> 
          <input 
                  name="last_name" 
                  className="col-3" 
                  type="text"
                  onChange={onchange}
                  />
         </div>
         <div className="form-group">
          <button  type="submit" className="btn" >Add</button>
          </div>
          </form>
          </div>        
    )

}

export default Formulary