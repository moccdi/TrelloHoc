import React from "react";
import Desk from "../Desk";
import logo from '../assets/images/logo.svg'
import sections from "../../stubs/sections";
import './style.css'

const App = ({sections}) => (
    <div className="app">
        <header>
            <h2>
                JavaScript Ninja Desk
            </h2>
        </header>
        <Desk sections={sections}/>
    </div>
)
export default App;