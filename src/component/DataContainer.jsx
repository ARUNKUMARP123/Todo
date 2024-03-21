
import {PropTypes} from 'prop-types'


export const DataContainer = ({Data,setData,Copydata,setId,setName,setDescription,setupdatestatus,setnewdata}) => {

  const Updatehandle=(Udata)=>{

   
   setId(Udata.id)
   setName(Udata.name)
    setDescription(Udata.description)
    setupdatestatus(true)
    setnewdata(Udata)

  }

  const Deletehandle=(id)=>{
setData(Data.filter((data)=>data.id!=id))
setDescription(""),setName("")
  }

  const Statushandle=(id,value)=>{
   setData(Data.map((data)=>data.id===id?{...data,status:value}:data))
  }

  
  return (
    <>
   <div className="container  px-4 px-lg-5 mt-5">
                <div className="row gx-4  gx-lg-5  row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {Copydata.map((data,index)=>(
                    <div key={`${data.id}-${index}`}  className="col-12 col-md-6 col-lg-4 p-3  g-2" style={{color:"black"}}>
                    <div className="box  p-3">
                    <p>Id<span className="s1">: <span  className="s2">{data.id}</span></span>  </p>
                    <p className="name">Name<span className="s1">: <span  className="s2">{data.name}</span></span> </p> 
                    <p className="description">Desc<span className="s1">: <span  className="s2">{data.description}</span></span></p>
                    <div className="status">
                      <p>Status<span className="s1">: <span  className="s2">{data.status}</span></span> </p>
                      <select  id="filter" value={data.status} className="form-select" onChange={(e)=>Statushandle(data.id,e.target.value)} >
                        <option  value={"Completed"} >Completed</option>
                        <option value={"Not-Completed"} >Not-Completed</option>
                      </select>
                    </div>
                    <div className="button-DU">
                      <button className="update btn btn-warning " onClick={()=>Updatehandle(data)} >Update</button>
                      <button className="delete btn btn-danger " onClick={()=>Deletehandle(data.id)} >Delete</button>
                    </div>
                    </div>
                  </div>

))}
                

      </div>
    </div>
 
 </>
   
  )
}


DataContainer.propTypes={
  Copydata:PropTypes.array,
  Data:PropTypes.array,
  setData:PropTypes.func,
  setId:PropTypes.func,
  setName:PropTypes.func,
  setDescription:PropTypes.func,

}

