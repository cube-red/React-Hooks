import React from 'react'
import "./Home.css"
import UseState from '../../Hooks/UseState'
import UseStatewithArray from '../../Hooks/UseState/UseStatewithArray'
import UseStateObjects from '../../Hooks/UseState/UseStateObjects'


const Home = () => {
    return (
        <div className="table">
            <div style={{backgroundColor: '#61dafb'}}>
                <div className="item">
                    <h1>UseState</h1>
                    <UseState />
                </div>
                
            </div>
            <div style={{backgroundColor: '#fb61da'}}>
                <div className="item">
                    <h1>UseState with Array</h1>
                    <UseStatewithArray />
                </div>
            </div>
            <div style={{backgroundColor: '	#61fbcf'}}>
                <div className="item">
                    <h1>UseState with Objects</h1>
                    <UseStateObjects />
                </div>
            </div>
        </div>
    )
}

export default Home
