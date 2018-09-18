import React from 'react';
import ReactDOM from 'react-dom';
import Users from "./lesson11/Users";



class RenderLesson11Users extends React.Component{

    render(){
        return(
            <Users/>
        )
    }
}
ReactDOM.render(<RenderLesson11Users />, document.getElementById('lesson11__test1'));


