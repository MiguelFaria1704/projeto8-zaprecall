import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import RecallPage from "../RecallPage/RecallPage";
import "./reset.css";
import "./style.css";

export default function App() {
    const [onScreen, setOnScreen] = React.useState("LandingPage"); 

    function compare() { 
        return Math.random() - 0.5; 
    }

    function TogglePage(onScreen) {
        if(onScreen === "LandingPage") {
            setOnScreen("RecallPage");
            deck.sort(compare);
        } else {
            setOnScreen("RecallPage");  
        }        
    }

    return (
        <>
            {onScreen === "LandingPage" ? (
                <LandingPage 
                    onScreen={onScreen}
                    TogglePage={TogglePage}
                    />
                ) : (
                <RecallPage deck={deck} />
                )
            }
        </>
    ); 
}


const deck = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    },
    {
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na.",
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes.",
    },
];