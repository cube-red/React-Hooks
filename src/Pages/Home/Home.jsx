import React from 'react'
import "./Home.css"
import UseState from '../../Hooks/UseState'
const Home = () => {
    return (
        <div className="table">
            <div className="item">
            <h1>UseState</h1>
            <UseState />
            </div>
        </div>
    )
}

export default Home
