import React from 'react';
import ReactDom from 'react-dom';

export default function Option(props){
    //this component must inherit from a question component.
      let isSelected = false;
    if(props.id == props.selectedID.id){
        isSelected = true;
    }

        const styles = {
            backgroundColor: isSelected ? ' rgb(0, 255, 157)': 'rgba(255, 255, 255, 0.835)'
        }
    return(
            <button style = {styles} onClick={props.handleClick}>{props.data}</button>
    )
}