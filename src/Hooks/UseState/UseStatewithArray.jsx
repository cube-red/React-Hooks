import React from 'react'

const UseStatewithArray = () => {
    const biodate = [
        "Aditya"
        
    ]
    const [inputValue,setInputValue] = React.useState('');
    const [array,setArray] = React.useState(biodate);

    

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

    const handleDelete = (name) =>{
        const mynewArray = array.filter((currElem) => {
            return currElem !== name
        })

        setArray(mynewArray)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}></input>
                <button type="submit">Enter</button>
            </form>
            <div>
            <ul style={{display:"flex", flexDirection:"column"}}>
                {array.map((item, index) => (
                <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                <li key={index}>{item}</li>
                <button style={{backgroundColor:"red"}} onClick={()=>{handleDelete(item)}}X> X </button>
                </div>
                ))}
                
            </ul>
            </div>

            <button onClick={clearArray} style={{color:"red"}}>Clear!</button>
        </div>
    )
}

export default UseStatewithArray
