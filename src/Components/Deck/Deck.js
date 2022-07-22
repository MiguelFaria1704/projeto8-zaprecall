import Card from "../Card/Card";
import "./style.css"

export default function Deck({
    countResult, 
    iconName,
    setIconName,
    score,
    setScore,
    deck
}) {

    return (
        <div className="deck">
            {deck.map((card, index) => (
                <Card 
                    key={index}
                    number={index + 1}
                    question={card.question}
                    answer={card.answer}
                    countResult={countResult}
                    iconName={iconName}
                    setIconName={setIconName}
                    score={score}
                    setScore={setScore}
                />
            ))}
        </div>
    );
}