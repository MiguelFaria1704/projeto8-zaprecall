import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import RecallPage from "../RecallPage/RecallPage";
import "./reset.css";
import "./style.css";

export default function App() {
    const [onScreen, setOnScreen] = React.useState("LandingPage"); 
    const [goal, setGoal] = React.useState(0);
    const [deckIndex, setDeckIndex] = React.useState(0);
    let deck = decks[deckIndex];
    const numCards = deck.length;

    function compare() { 
        return Math.random() - 0.5; 
    }

    function togglePage(onScreen) {
        if(onScreen === "LandingPage") {
            setOnScreen("RecallPage");
            deck.sort(compare);
        } else {
            setOnScreen("LandingPage");  
        }        
    }

    return (
        <>
            {onScreen === "LandingPage" ? (
                <LandingPage 
                    onScreen={onScreen}
                    togglePage={togglePage}
                    setGoal={setGoal}
                    setDeckIndex={setDeckIndex}
                    />
                ) : (
                <RecallPage
                    deck={deck}
                    togglePage={togglePage}
                    onScreen={onScreen}
                    goal={goal}
                    numCards={numCards}
                />
                )
            }
        </>
    ); 
}


const decks = [
[
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces."
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula."
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma."
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências."
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes."
    }
],

[
    {
        question: "Podemos usar a função map para __",
        answer: "mapear um array retornando um novo array."
    },
    {
        question: "Se quisermos filtrar os elementos de um array, podemos usar __",
        answer: "a função filter."
    },
    {
        question: "Uma higher order function é uma função que recebe uma outra como argumento e__",
        answer: "retorna outra função."
    },
    {
        question: "Funções que são chamadas dentro de outra são chamadas de__",
        answer: "callback functions."
    }
]
];