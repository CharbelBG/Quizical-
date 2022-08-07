import React from 'react';
import ReactDom from 'react-dom';
import Menu from './Menu';
import Game from './Game'
export default function App(){
   
    const [gameData, setGameData] = React.useState('')
    let url = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';
    React.useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setGameData(data))
        .catch(err => console.log('something went wrong,', err))
    },[])
    const [isMenu, setIsMenue] = React.useState(true);
    function toggleMenu(){
        console.log('menu button is clicked');
        setIsMenue(oldValue => !oldValue);
    };
    return(
        <div>
           {isMenu && <Menu handleClick = {toggleMenu}/>}
           {!isMenu && gameData && <Game gameData = {gameData}/>} 
            <a href="https://github.com/CharbelBG">
            <h6>developed by Charbel BG</h6>
            <img className='github' src={require('../github.svg')} /> 
            </a>
        </div>
    )
}

