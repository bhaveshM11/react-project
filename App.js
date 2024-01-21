import React from 'react'
import ReactDOM from "react-dom/client"

//React element -- JS Object
const navItems1 = <h1>Home</h1>
const navItems2 = <h1>About Us</h1>
const navItems3 = <h1>Contact Us</h1>


const NavBar =()=> React.createElement("div",{className:"nav-div"},[navItems1,navItems2,navItems3])

const heading = <div className='heading-container'>{NavBar()}</div>

const App = () => {
    return (
        <div className="app-container">
            <h1> In React Component</h1>
            {NavBar()}
            {heading}
            <NavBar/>
        </div>
    )
}

//Html element 
const rootFetch = document.getElementById("root")

//Creating root React Element
const root = ReactDOM.createRoot(rootFetch)

root.render(<App />)