import React from "react";
import logo from "./logo.png";
import "./style.css"

export default function LandingPage({
    onScreen,
    togglePage,
    setGoal
}) {  
    return (
        <div className="landing-page">
            <img src={logo} alt="Logo ZapRecall"/>
            <h1>ZapRecall</h1>
            <Form 
                onScreen={onScreen}
                togglePage={togglePage}
                setGoal={setGoal}
            />
        </div>
    );
}

function Form({
    onScreen,
    togglePage,
    setGoal
}) {
    

    function handleGoal(event) {
        setGoal(event.target.value);
    }

    function handleSubmit(event) {
        togglePage(onScreen);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="goal" placeholder="Digite sua meta de zaps..." onChange={handleGoal}></input>
            <input type="submit" value="Iniciar Recall!"></input>
        </form>
    );
}