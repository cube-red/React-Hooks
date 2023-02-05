import React from 'react'

const UseStatewithArray = () => {
    const biodate = [
        "Aditya"
        
    ]
    const [inputValue,setInputValue] = React.useState('');
    const [array,setArray] = React.useState([]);

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        //biodate(...array,inputValue);
        setArray([...array,inputValue]);
        console.log(array);
        setInputValue('');

    }

    const clearArray = (e) =>{
        e.preventDefault();
        setArray([]);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}></input>
                <button type="submit">Enter</button>
            </form>
            <ul style={{display:"flex", flexDirection:"column"}}>
                {array.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
                <button> X </button>
            </ul>

            <button onClick={clearArray} style={{color:"red"}}>Clear!</button>
        </div>
    )
}

export default UseStatewithArray
