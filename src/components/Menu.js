import React from 'react';
import ReactDom from 'react-dom';
export default function Menu(props){
    return(
        <div className='Menu'>
            <h1>Quizical Game</h1>
            <div>
                Answer 5 random questions 
            </div>
            <button onClick={props.handleClick}>Begin</button>
        </div>
    )
}