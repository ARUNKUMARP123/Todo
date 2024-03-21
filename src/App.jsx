import { useState } from "react"

import './App.css'
import { DataContainer } from './component/DataContainer'
import { InputBox } from './component/InputBox';
import { FilterContainer } from './component/FilterContainer';



function App() {
  const [Status,setStatus]=useState("Completed");
  const [Data,setData]=useState([]);
 const [Copydata,setCopydata]=useState([]);
 var [Id,setId]=useState(1);
 const [Name,setName]=useState("");
 const [Description,setDescription]=useState("");
 const [updatestatus,setupdatestatus]=useState(false)
 const [newdata,setnewdata]=useState();


  return (
    <>
    <InputBox newdata={newdata} setnewdata={setnewdata} updatestatus={updatestatus} setupdatestatus={setupdatestatus} Data={Data} setData={setData} Status={Status}  Id={Id} setId={setId} Name={Name} setName={setName}  Description={Description}  setDescription={setDescription}/>
    <FilterContainer setCopydata={setCopydata}  Data={Data}/>
    <DataContainer setnewdata={setnewdata} updatestatus={updatestatus} setupdatestatus={setupdatestatus} Data={Data} setData={setData} Copydata={Copydata} setId={setId} setName={setName} setDescription={setDescription}/>
   
    
     
   
   
    </>
  )
}

export default App
