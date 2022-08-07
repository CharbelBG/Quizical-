import React from 'react';
import ReactDom from 'react-dom';
import Option from './Option';
import AnswersData from './AnswersData';
export default function Question(props){
   

    const [selectedOption, setSelectedOption] = React.useState(
        {
            id:'',
            answer:'',
        }
    );
       
    function toggleSelection(id,newAnswer){
        let tempObj = selectedOption;
        tempObj.id = {id};
        tempObj.answer = {newAnswer};

        {AnswersData[props.questionID].answer = newAnswer} //the data file used elsewere.
        {props.handleChangeAnswers()}
        setSelectedOption(oldValue => ({
            ...tempObj
        }))
    }
    return(
        <div>
            <h4>{props.question}</h4>                                 
            <Option data = {props.wrong_answers[0]} handleClick = {() =>toggleSelection(0,props.wrong_answers[0])} id = '0' selectedID = {selectedOption.id}/>
            <Option data = {props.wrong_answers[1]} handleClick = {() =>toggleSelection(1,props.wrong_answers[1])} id = {1} selectedID = {selectedOption.id}/>
            <Option data = {props.wrong_answers[2]} handleClick = {() =>toggleSelection(2,props.wrong_answers[2])} id = {2} selectedID = {selectedOption.id}/>
            <Option data = {props.correct_answer} handleClick = {() => toggleSelection(3,props.correct_answer)}  id = {3} selectedID = {selectedOption.id}/> 
        </div>
    )
}