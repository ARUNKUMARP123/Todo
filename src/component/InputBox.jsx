
import { PropTypes } from "prop-types";

export const InputBox = ({setData,Status,Data,Id,Name,Description,setId,setName,setDescription,updatestatus,setupdatestatus,newdata,setnewdata}) => {

 
  console.log(newdata)

  const Addhandle=()=>{
    if(updatestatus===false){
      setId(Id+1);
    setData([...Data,{id:Id,name:Name,description:Description,status:Status}]);
    setDescription(""),setName("")
    }
   else{
    setData(Data.map((data)=>data.id===newdata.id?{...data,name:Name,description:Description}:data))
    setDescription(""),setName("")
    setupdatestatus(false)
   }
    
  }

  return (
    <div className="container Input-mainBox">   
        <h5>My Todo</h5>
        <div className="inputbox">
        <input type="text" placeholder="Enter your Name here" value={Name} onChange={(e)=>setName(e.target.value)}  className="form-control" />
        <input type="text" placeholder="Enter your Description here" value={Description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />
        {updatestatus===false?(<button className="btn btn-success" onClick={Addhandle}  >Add</button>):(<button className="btn btn-success" onClick={Addhandle}  >save</button>)}
        </div>
       
    </div>
  )
}


InputBox.propTypes={
  setData:PropTypes.func,
  Status:PropTypes.string,
  Name:PropTypes.string,
  Description:PropTypes.string,
  Id:PropTypes.number,
  Data:PropTypes.array,
  setId:PropTypes.func,
  setName:PropTypes.func,
  setDescription:PropTypes.func,

}