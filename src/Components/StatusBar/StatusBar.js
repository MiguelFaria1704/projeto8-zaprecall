import React from "react";
import PartyEmoji from "./party.png";
import SadEmoji from "./sad.png";
import "./style.css";

export default function StatusBar({
    cont, 
    iconName,
    results,
    score,
    togglePage,
    onScreen,
    goal
}) {
    const [display, setDisplay] = React.useState("none");   

    return (
        <div className="status-bar">
            <FinalMessage 
                cont={cont}
                results={results}
                score={score}
                setDisplay={setDisplay}
                goal={goal}
                />

            <p>{cont}/4 CONCLUÍDOS</p>

            <Results 
                iconName={iconName}
                results={results}
            />

            <div className={display} onClick={() => togglePage(onScreen)}><p>REINICIAR RECALL</p></div>
        </div>
    );
}

 function ResultIcon({iconName, i}) {
    return (         
        <ion-icon name={iconName[i]}></ion-icon>     
    );
}

function Results({
    iconName, 
    results,
}) {
    return (
        <div className="results">
            {results.map((icon, index) => (
                <ResultIcon    
                    key = {index}
                    i = {index}
                    iconName = {iconName}
                />
            ))}
        </ div>
    );
}

function FinalMessage({
    cont, 
    results,
    score,
    setDisplay,
    goal
}) {
    let message = {emoji: "", reaction: "", msg: ""};

    function showFinalMessage(results) {
        if(score >= goal) {
            message = {
                emoji: "PartyEmoji",
                reaction: "Parabéns!",
                msg: "Você não esqueceu de nenhum flashcard!"
            }
        } else {
            message = {
                emoji: "SadEmoji",
                reaction: "Putz...",
                msg: "Ainda faltam alguns... Mas não desanime!"
            }
        }
    }

    if(cont === 4) {
        showFinalMessage(results);
        setDisplay("");
    }

    return (
        <div className="final-message">
            {cont === 4 && (
            <div>
                {message.emoji === "PartyEmoji" ? (
                    <img src={PartyEmoji} alt="emoji" />
                ) : (
                    <img src={SadEmoji} alt="emoji" />
            )}
                <p><strong>{message.reaction}</strong></p>
            </div>
            )}
            <p>{message.msg}</p>
        </div>
    );
}