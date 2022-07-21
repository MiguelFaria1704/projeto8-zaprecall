import React from "react";

export default function StatusBar({
    cont, 
    iconName,
    results,
    message
}) {   

    return (
        <div className="status-bar">
            <FinalMessage message={message}/>
            <p>{cont}/4 CONCLUÍDOS</p>
            <Results 
                iconName={iconName}
                results={results}
            />
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

function FinalMessage({message}) {
    return (
        <div className="final-message">
            <div>
                <span role="img" aria-label="emoji">{message.emoji}</span>
                <p>{message.reaction}</p>
            </div>
            <p>{message.msg}</p>
        </div>
    );
}