import React,{useState} from "react";
import data from './data';
import './App.css'

const App=()=>{
    const [search, setFirstSearch]=useState('')

 return(
    <div className="image">

   <form className="container">
    <input  
    className="main-page"
     type="text"
     name="firstname"
     id="firstname"
     value={search}
     onChange={(e)=>setFirstSearch(e.target.value)}
     placeholder="Enter Blood Group"
    />
    <h1 className="heading">search blood Groups only capatial letters</h1>
   </form>
   <hr/>
   <ul>
{
    data.filter(data=>data.bloodGroup.includes(search)).map((eachItem)=>{
    const {id,name,bloodGroup,phone,location}=eachItem
    return(
        <li key={id}>
            <h1 className="head-one">{name}</h1>
            <p className="para-one">{bloodGroup}</p>
            <p className="para-two">{phone}</p>
            <p className="location">{location}</p>
        </li>
    )
    })
}
</ul>
   </div>
 )

}

export default App