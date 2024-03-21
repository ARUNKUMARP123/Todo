import { useEffect, useState } from "react"
import {PropTypes} from 'prop-types'
export const FilterContainer = ({setCopydata,Data}) => {

const [Filterstatus,setFilterstatus]=useState("All");


 useEffect(()=>{
  if(Filterstatus==="All"){
    setCopydata(Data)
  }else{
    setCopydata(Filterstatus==="Completed"?(Data.filter((data)=>data.status==Filterstatus)):((Data.filter((data)=>data.status==Filterstatus))))
  }
 },[Data, Filterstatus, setCopydata,setFilterstatus]);


  
  return (
    <div className="container mt-5 filter-mainbox d-flex justify-content-between">
        <h3>My Todo</h3>
        <div className="filter-status d-flex ">
            <p>Status Filters: </p>
            <select name="filter" id="showdata" onChange={(e)=>setFilterstatus(e.target.value)} >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not-Completed">Not-Completed</option>
            </select>
        </div>
    </div>
  )
}


FilterContainer.propTypes={
  Data:PropTypes.array,
  setCopydata:PropTypes.func,
}