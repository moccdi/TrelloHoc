import React from 'react';
import Section from "../Section";
import './style.css'


const Desk = ({sections}) => (
    <div className="board">
        <div className="wrapper">
            {
                sections.map(section => <Section key={section.id}{...section} />)
            }
        </div>
    </div>
)
Desk.defaultProps = {
    sections:[],
}
export default Desk;

