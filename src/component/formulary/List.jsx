import React from 'react'
import { connect } from 'react-redux';

const List=({nameList})=>{
    console.log(nameList.info)
    if (!Object.keys(nameList.info).length) return <div>No info..</div>
    return(
        <ul>
            {nameList.info.map(res=>{
            return (<li key={res.firt_name}>{res.first_name+" "+res.last_name}
                   <button key={res.firt_name} onClick={nameList.ondelete} id={res.first_name} className="btn btn-danger btn-sm"  >Delete</button></li>)
            })}
        </ul>
    );
}

export default List;
