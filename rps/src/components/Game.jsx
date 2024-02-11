import { useState} from "react";
import Rules from '../../images/image-rules-bonus.svg';
import '../App.css';
import ResultPage from "../ResultPage";
import Pentagon from '../../images/bg-pentagon.svg';
import Scissors from '../../images/icon-scissors.svg';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Lizard from '../../images/icon-lizard.svg';
import Spock from '../../images/icon-spock.svg';

const Game = () => {
const [playerChoice,setPlayerChoice] = useState("");
const [computerChoice,setComputerChoice] = useState("");
const [result,setResult] = useState("");
const [image,setImage] = useState(false);
const [gameInProgress,setGameInProgress] = useState(false);
const [score,setScore] = useState(0);


const choices = ['scissors','paper','rock','lizard','spock'];
const randomize = () => {
   return choices[Math.floor(Math.random() * choices.length)];
}

const determineWinner = (player,computer) => {
    if (player === computer) return "TIE";

    if(
        (player === 'scissors' && computer=== 'paper') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'rock' && computer === 'lizard') ||
        (player === 'lizard' && computer === 'spock') ||
        (player === 'spock' && computer === 'scissors') ||
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'spock') ||
        (player === 'lizard' && computer === 'paper') ||
        (player === 'spock' && computer === 'rock') ||
        (player === 'scissors' && computer === 'lizard')
     ) {
        return "YOU WIN";
    } else {
        return "YOU LOSE";
    }
};
const handleClick = (choice) => {
    const computerChoice = randomize();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const result = determineWinner(choice,computerChoice);
    setResult(result)
    setGameInProgress(true);
    scorefun(result);
}
const rulesimage = () => {
    setImage(!image);
};
const playAgain = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setScore(score);
    setGameInProgress(false);
}
const scorefun = (result) => {
    if (result === 'YOU WIN') {
        setScore(score => score + 1);
    } else if (result === 'YOU LOSE') {
        setScore(score => score - 1);
    }
}

    return (
        <div>
            <div className="header">
                <div className="titles">
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                    <p>LIZARD</p>
                    <p>SPOCK</p>
                </div>
                <div className="score-area">
                    <p className="score-title">SCORE</p>
                    <p className="score">{score}</p>
                </div>
            </div>
            {!gameInProgress && (
            <div className="pentagon-container"> 
            <div className="pentagon"><img src={Pentagon} alt="pentagon"/></div>
            <button className="scissors-button" onClick={() => handleClick('scissors')}><img src={Scissors} alt="scissors"/></button>
            <button className="paper-button" onClick={() => handleClick('paper')} ><img src={Paper} alt="paper"/></button>
            <button className="rock-button" onClick={() => handleClick('rock')}><img src={Rock} alt="Rock"/></button>
            <button className="lizard-button" onClick={() => handleClick('lizard')}><img src={Lizard} alt="lizard"/></button>
            <button className="spock-button" onClick={() => handleClick('spock')}><img src={Spock} alt="spock"/></button>
            </div>
            )}
            {gameInProgress && (
                <ResultPage
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                playAgain={playAgain}
                result={result}
                />
            )}
            <div className="Rules-flex">
              <button className="Rules-B" onClick={rulesimage}>RULES</button>  
              {image && (
                <div className="rules-div">
                    <div className="rules-flex">
                    <p className="rules-Title">RULES</p>    
                    <button onClick={rulesimage} className="rules-closing-button">X</button>
                    </div>
                    <img src={Rules} alt="rules"/>
                </div>
              )}
              </div>
        </div>
    )
}
export default Game;