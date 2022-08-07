import React from 'react';
import ReactDom, { render } from 'react-dom';
import Question from './Question';
import AnswersData from './AnswersData';
export default function Game(props){

    let data = props.gameData;
    let answers_data = data.results;
    
    const [results, setResults] = React.useState({
        canReset:false,
        total : 0,
    });

    const [answers,setAnswers] = React.useState(AnswersData);
    function answersChange(){
        setAnswers(oldValue =>{
            return [...AnswersData]
        })
    }
    //function to validate the answers.
    let canValidate = false;
    function validateButton(){
        for(let i = 0; i < 5 ; i++){
            if(answers[i].answer == ''){

                return canValidate = false;
            }else if(i ==4){
                return canValidate = true;
            }
        }
    }   
    if(!results.canReset){
        validateButton();
    }

    //function to show results
    function validateAnswers(){
        let _total = 0;
        for(let i = 0; i < 5; i++){
            if(answers[i].answer == answers_data[i].correct_answer){
                _total ++;
                console.log('Correct!');
            }else{
                console.log('wrong!');
            }
        }
        setResults(oldValue => ({
            ...oldValue,
            total: _total,
            canReset: !results.canReset,
          }))
       
    }

    function renderComponents(){
        let renderArr = [];
        //render question component passing the info of 1 question at a time.
        for(let i = 0; i<5; i++){
            renderArr[i] = <Question question = {data.results[i].question}
                wrong_answers = {answers_data[i].incorrect_answers}
                correct_answer = {answers_data[i].correct_answer}
                questionID = {i}
                key = {i}
                handleChangeAnswers = {answersChange}
             />
        }
        return renderArr;
    }


    return(
        <div className = 'game'>       
           <h5>loaded</h5>
           {renderComponents()}
           {!results.canReset && canValidate && <button className='validate' onClick={validateAnswers}>Validate</button>}
           {results.canReset && <div>
            <h4>{results.total}/5</h4>
            <button className='restart' onClick = {() => window.location.reload(false)}>Restart</button>
            </div>}
        </div>
    )
}