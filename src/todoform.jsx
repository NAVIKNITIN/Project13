import { useState } from "react";
import React from "react";

const Todoform = (props) =>{
    const [name,setname]=useState("");
    const [profession,setprofession]=useState("");
    const Submit=(e)=>{
        e.preventDefault();
        if(!name){return null;}
        if(!profession){return null;}
        props.todoForm(name,profession);
        setname("");
        setprofession("");
    }

    return(
        <React.Fragment>
            <div className="ui container">
                <div className="row">
                    <div className="col-md-8" style={{margin:'15px'}}>
                        <form onSubmit={Submit}>
                            <div className="form-group">
                                <input className="form-control" type="name" placeholder="Enter Your Name" value={name}
                                onChange={e=>setname(e.target.value)}
                            ></input>
                                <input className="form-control" type="profession" placeholder="Enter Profession" value={profession}
                                onChange={e=>setprofession(e.target.value)}
                            ></input>
                                
                            <button type="submit" className="btn btn-primary"
                             onClick={Submit}
                             >SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Todoform;
