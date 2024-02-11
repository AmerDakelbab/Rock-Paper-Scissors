import React from "react";
import Scissors from '../images/icon-scissors.svg';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Lizard from '../images/icon-lizard.svg';
import Spock from '../images/icon-spock.svg';


const ResultPage = ({playerChoice,computerChoice,playAgain,result}) => {
  


  
    const getChoiceImage = (choice) => {
        switch (choice) {
          case 'rock':
            return Rock;
          case 'paper':
            return Paper;
          case 'scissors':
            return Scissors;
          case 'lizard':
            return Lizard;
          case 'spock':
            return Spock;
          default:
            return null;
        }
      };
      const getStyle = (choice) => {
        switch (choice) {
            case 'rock':
                return 'rock-buttonr';
            case 'paper':
                return 'paper-buttonr';
            case 'scissors':
                return 'scissors-buttonr';        
            case 'lizard':
                return 'lizard-buttonr';
            case 'spock':
                return 'spock-buttonr';
                default:
                    return null;    
            }
      };
      
    return (
    <div>  
        <div className="Result-page">
            <div className="result-playero">
                <p className="player-p">YOU PICKED</p>
                <button className={getStyle(playerChoice)}><img src={getChoiceImage(playerChoice)} alt="player"/></button>
            </div>
            <div className="result-playert">
                <p className="result-r">{result}</p>
                <button className="play-again-button" onClick={playAgain}>PLAY AGAIN</button>
            </div>
            <div className="result-playerth">
                <p className="player-p">THE HOUSE PICKED</p>
                <button className={getStyle(computerChoice)}><img src={getChoiceImage(computerChoice)} alt="computer"/></button>
        </div>
        </div>
        </div>
    );
}
export default ResultPage;