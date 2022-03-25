import React, { useState } from 'react';

function QuestionsList() {


    const questions = [
        {
            question: "How many points did Lebron James have this game?",
            options: [
                { answer: "24", isCorrect: true },
                { answer: "12", isCorrect: false },
                { answer: "20", isCorrect: false },
                { answer: "30", isCorrect: false }
            ]
        },
        {
            question: "How many assists did Russell Westbrook have this game?",
            options: [
                { answer: "2", isCorrect: false },
                { answer: "8", isCorrect: false },
                { answer: "6", isCorrect: true },
                { answer: "30", isCorrect: false }
            ]
        },
        {
            question: "How many rebounds did Dejounte Murray have this game?",
            options: [
                { answer: "12", isCorrect: false },
                { answer: "5", isCorrect: false },
                { answer: "2", isCorrect: false },
                { answer: "15", isCorrect: true }
            ]
        },
        {
            question: "How many steals did Keldon Johnson have this game?",
            options: [
                { answer: "2", isCorrect: false },
                { answer: "1", isCorrect: true },
                { answer: "0", isCorrect: false },
                { answer: "3", isCorrect: false }
            ]
        }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);


    const handleClickAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };

    return (
        <div className='QuestionsList'>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button onClick={() => handleClickAnswer(option.isCorrect)}>{option.answer}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuestionsList;