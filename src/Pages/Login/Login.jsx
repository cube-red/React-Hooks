import React from 'react'
import "./login.css"
import { useState } from 'react'
const Login = () => {

    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [array,setArray] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
       // if(name[name.length-1]==="gand mara ab!")setArray([])
        if(name.length > 0)setArray([...array,name]);
        if(name.length === 0)setArray([...array,"Abe kuch toh karle!"])
        console.log(array);
        setName('');
    }

    const handleReset = (e) =>{
        e.preventDefault();
        setArray([]);
        //setArray(["gand mara ab!"])
        

    }

    return (
        <div className="main">
            <div className="outerdiv">
                <div>
                    <h1>Hello</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}  className="form">
                        <input type="text" className="input" value={name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}>
                        
                        </input>
                        <input type = "password" className="input" placeholder="Enter Password" onChange={(e)=>{setPass(e.target.value)}}>

                        </input>

                        <button className="input" style={{backgroundColor:"lightgray"}} type="submit">Click</button>

                        <button className="input" style={{backgroundColor:"#FF5733"}} type="submit" onClick={handleReset}>Reset</button>
                    </form>
                </div>
            </div>
            <div className="display">
                <div>
                    <h1 style={{textAlign:"center"}}>Display</h1>
                </div>
                <ul style={{display:"flex", flexDirection:"column"}}>
                    {array.map((item, index) => (
                    
                    <li key={index}>{item}</li>
                    
                    ))}
                
            </ul>
            </div>
        </div>

    )
}

export default Login
