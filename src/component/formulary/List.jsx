import React from 'react'
import { connect } from 'react-redux';

const List=({nameList:{info,gender,ondelete}})=>{    
    if (!Object.keys(info).length) return <div>No info..</div>
    return(
        <ul>
            {info.map(res=>{
            return (<li key={res.firt_name}>{res.first_name+" "+res.last_name}
                   <button key={res.firt_name} onClick={ondelete} id={res.first_name} className="btn btn-danger btn-sm"  >Delete</button></li>)
            })}
        </ul>
    );
}

export default List;
