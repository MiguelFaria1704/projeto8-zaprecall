import React from "react";
import Deck from "./Deck";
import StatusBar from "./StatusBar";

export default function RecallPage() {
    const [cont, setCont] = React.useState(0);
    const [iconName, setIconName] = React.useState([]);
    const [results, setResults] = React.useState([]);
    const [message, setMessage] = React.useState({emoji: "", reaction: "", msg: ""});
    const [score, setScore] = React.useState(0);

    function countResult() {
        setCont(cont + 1);
        setResults([...results, iconName]);

        if(cont === 3) {
            showFinalMessage(results);
        }
    }

    function showFinalMessage(results) {
        console.log(score);

        if(score === 0) {
            setMessage({
                emoji: "🥳",
                reaction: "Parabéns!",
                msg: "Você não esqueceu de nenhum flashcard!"
            });
        } else {
            setMessage({
                emoji: "😥",
                reaction: "Putz...",
                msg: "Ainda faltam alguns... Mas não desanime!"
            });
        }
    }

    return (
        <div className="recall-page">
            <div className="top">
                <img src="assets/logo.png" alt="Logo ZapRecall"/>
                <h1>ZapRecall</h1>
            </div>
            <Deck 
                countResult={countResult}
                iconName={iconName}
                setIconName={setIconName}
                score={score}
                setScore={setScore}
                />
            <StatusBar 
                cont={cont}
                iconName={iconName}
                results={results}
                message={message}
                />
        </div>
    );
}