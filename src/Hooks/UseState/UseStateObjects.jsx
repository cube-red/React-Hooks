import React from 'react'

const UseStateObjects = () => {
    const [myObject,setMyObject] = React.useState({
        myName:"Aditya",myAge:24,myCompany:"TCS"
    });
    const [name,setName] = React.useState('');
    const [age,setAge] = React.useState();
    const [company,setCompany] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMyObject({
            ...myObject,
            myName:name,
            myAge:age,
            myCompany:company
        })
        setName('');
        setAge();
        setCompany('');
    }
    return (
        <div>
            <h2>{`My Name is ${myObject.myName}, age is ${myObject.myAge}, Company : ${myObject.myCompany}`}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)}></input>
                <input type="number" placeholder="Age" value={age} onChange={(event)=>setAge(event.target.value)}></input>
                <input type="text" placeholder="Company" value={company} onChange={(event)=>setCompany(event.target.value)}></input>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default UseStateObjects
