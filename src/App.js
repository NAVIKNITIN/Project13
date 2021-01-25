import React,{useState} from "react";
import './App.css';
import Todoform from "./todoform";

function App() {
  // const [taskdone,settaskdone]=useState(false);
  const [todos,settodos] = useState([{
    id:1,
    name:'bipin',
    profession:'full stack developer',
    isComplete:false
  },
{
  id:2,
  name:'nitin',
  profession:'web developer',
  isComplete:false

},
{
  id:3,
  name:'vinay',
  profession:'professional engineer',
  isComplete:false
}
]);

  const addtodo=(name,profession)=>{
        const alltodos = [...todos,{name,profession}];
        settodos(alltodos);
      
      };
const completedtodo=(index)=>{
  // console.log(index);
  // let i = index -1;
  const alltodos = [...todos];
  console.log(alltodos);
  alltodos[index].isComplete=true;
  settodos(alltodos);
  // settaskdone(true);

};
const deletetodo=(key)=>{
  const alltodos = [...todos];
  alltodos.splice(key,1);
  settodos(alltodos);

};




  return (
    <div className="ui container">
      {/* <div className="row">
        <div className="col-md-12">
          {
            !taskdone ? <h1 className="alert alert-info">Task is done!!!!</h1> : null
          }
        </div>
      </div> */}
      <div className="row">
        {
          todos.map((data,key)=>{
            return(
              <div className="col-md-12" key={key}>
                <div className="card">
                  <div className="card-body"
                  style={{textDecoration :data.isComplete ? "line-through" : ""}}>
                    {
                      data.id
                    }
                    <h4 className="card-name" style={{textDecoration :data.isComplete 
                      ? "line-through" : ""}}>{data.name}</h4>

                    <p className="card-text" style={{textDecoration :data.isComplete 
                      ? "line-through" : ""}}>{data.profession}</p>

                  </div>
                  <div className="col-md-6">
                  <button type="button" className="btn btn-danger btn-sm"
                  onClick={()=>deletetodo(key)}
                  >remove</button>
                  <button type="button" className="btn btn-primary"
                  onClick={()=>completedtodo(key)}
                  >complete</button>
                  </div>
                 
                </div>
               
              </div>  
            )
          })
        }
         <div className="row ">
               
                <Todoform todoForm={addtodo}/>
                  </div>
                
      </div>
    </div>
  );
}

export default App;
