import React from "react";
import logo from "./logo.png";
import "./style.css"

export default function LandingPage({
    onScreen,
    togglePage,
    setGoal,
    setDeckIndex
}) {  
    return (
        <div className="landing-page">
            <img src={logo} alt="Logo ZapRecall"/>
            <h1>ZapRecall</h1>
            <Form 
                onScreen={onScreen}
                togglePage={togglePage}
                setGoal={setGoal}
                setDeckIndex={setDeckIndex}
            />
        </div>
    );
}

function Form({
    onScreen,
    togglePage,
    setGoal,
    setDeckIndex
}) {
    
    function handleDeck(event) {
        setDeckIndex(event.target.value);
    }

    function handleGoal(event) {
        setGoal(event.target.value);
    }

    function handleSubmit(event) {
        togglePage(onScreen);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <select onChange={handleDeck} required> 
                <option value="Escolha seu deck" selected disabled>Escolha seu deck</option>
                <option value="0">React</option>
                <option value="1">HoF</option>
            </select>
            <input type="text" name="goal" placeholder="Digite sua meta de zaps..." onChange={handleGoal} required></input>
            <input type="submit" value="Iniciar Recall!"></input>
        </form>
    );
}