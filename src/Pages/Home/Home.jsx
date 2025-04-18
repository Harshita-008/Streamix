import React from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar, category}) => {
    return (
        <div className={`container ${sidebar ? "" : "large-container"}`}>
            <Feed category={category}/>
        </div>
    )
}

export default Home
