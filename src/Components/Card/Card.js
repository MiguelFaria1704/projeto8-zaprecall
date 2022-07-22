import React from "react";
import "./style.css"
import setinha from "./setinha.png"

export default function Card({
    number,
    question,
    answer,
    countResult,
    iconName,
    setIconName,
    score,
    setScore,
}) {
    const[state, setState] = React.useState("hidden");

    function flipCard(nextState) {
        setState(nextState);
    }
    
    function markResult(result) {
        if(result === "right") {
            setIconName([...iconName, "checkmark-circle-sharp"]);
        }
        if(result === "doubt") {
            setIconName([...iconName, "help-circle-sharp"]);
        }
        if(result === "wrong") {
            setIconName([...iconName, "close-circle-sharp"]);
            setScore(score - 1);
        }

        flipCard(result);
        countResult();
    }

    return (
        <div className={state}>
            {state === "hidden" && (
                <div>
                    <h5>Pergunta {number}</h5>
                    <ion-icon name="play-outline" onClick={() => flipCard("displayed")}></ion-icon>
                </div>
                )}
            {state === "displayed" && (
                <div>
                    <p>{question}</p>
                    <img src={setinha} alt="Virar carta" onClick={() => flipCard("answered")}/>
                </div>
            )}
            {state === "answered" && (
                <div>
                    <p>{answer}</p>
                    <Options markResult={markResult}/>
                </div>
            )} 
            {(state === "right" || state === "doubt" || state === "wrong") && (
                <div>
                <h5>Pergunta {number}</h5>
                <ion-icon name={iconName[number - 1]}></ion-icon>
            </div>
            )} 
        </div>
    );
}

function Options({markResult}) {
    return (
        <div className="options">
            <button className="wrong-button" onClick={() => markResult("wrong")}>Não lembrei</button>
            <button className="doubt-button" onClick={() => markResult("doubt")}>Quase não lembrei</button>
            <button className="right-button" onClick={() => markResult("right")}>Zap!</button>
        </div>
    );
}