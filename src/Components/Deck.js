import Card from "./Card";

export default function Deck({
    countResult, 
    iconName,
    setIconName,
    score,
    setScore
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


