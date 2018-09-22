import React from 'react';
import CardEditor from "./CardEditor";
import { compose,withHandlers} from 'recompose';


export default compose(
    withHandlers({
        onChange:props => event =>{
            props.onChange(event.target.value);
        }
        })
) (CardEditor);