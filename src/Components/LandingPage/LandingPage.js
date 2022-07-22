import logo from "./logo.png";
import "./style.css"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <img src={logo} alt="Logo ZapRecall"/>
            <h1>ZapRecall</h1>
            <input type="button" value="Iniciar Recall!"></input>
        </div>
    );
}