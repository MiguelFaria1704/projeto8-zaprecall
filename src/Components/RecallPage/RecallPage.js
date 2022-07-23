import React from "react";
import Deck from "../Deck/Deck";
import StatusBar from "../StatusBar/StatusBar";
import logo from "./logo.png";
import "./style.css";

export default function RecallPage({
    deck,
    togglePage,
    onScreen,
    goal,
    numCards
}) {
    const [cont, setCont] = React.useState(0);
    const [iconName, setIconName] = React.useState([]);
    const [results, setResults] = React.useState([]);
    const [score, setScore] = React.useState(0);

    function countResult() {
        setCont(cont + 1);
        setResults([...results, iconName]);
    }

    return (
        <div className="recall-page">
            <div className="top">
                <img src={logo} alt="Logo ZapRecall"/>
                <h1>ZapRecall</h1>
            </div>
            <Deck 
                countResult={countResult}
                iconName={iconName}
                setIconName={setIconName}
                score={score}
                setScore={setScore}
                deck={deck}
                />
            <StatusBar 
                cont={cont}
                iconName={iconName}
                results={results}
                score={score}
                togglePage={togglePage}
                onScreen={onScreen}
                goal={goal}
                numCards={numCards}
                />
        </div>
    );
}