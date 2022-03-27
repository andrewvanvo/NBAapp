import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionsList(props) {
    // Choosing 4 players - currently, ends of array 
    
    let gameID = props.gameID
    let playerArray = props.usablePlayers
    
    let player1 = playerArray[0]
    let player2 = playerArray[1]
    let player3 = playerArray[playerArray.length - 1]
    let player4 = playerArray[playerArray.length - 2]



    const questions = [
        {
            question: `How many points did ${player1.player.firstname} ${player1.player.lastname} have this game?`,
            options: [
                { answer: player1.points, isCorrect: true },
                { answer: "12", isCorrect: false },
                { answer: "20", isCorrect: false },
                { answer: "30", isCorrect: false }
            ]
        },
        {
            question: `How many assists did ${player2.player.firstname} ${player2.player.lastname} have this game?`,
            options: [
                { answer: "2", isCorrect: false },
                { answer: "8", isCorrect: false },
                { answer: player2.assists, isCorrect: true },
                { answer: "30", isCorrect: false }
            ]
        },
        {
            question: `How many rebounds did ${player3.player.firstname} ${player3.player.lastname} have this game?`,
            options: [
                { answer: "12", isCorrect: false },
                { answer: "5", isCorrect: false },
                { answer: "2", isCorrect: false },
                { answer: player3.totReb, isCorrect: true }
            ]
        },
        {
            question: `How many steals did ${player4.player.firstname} ${player4.player.lastname} have this game?`,
            options: [
                { answer: "2", isCorrect: false },
                { answer: player4.steals, isCorrect: true },
                { answer: "0", isCorrect: false },
                { answer: "3", isCorrect: false }
            ]
        }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    let navigate = useNavigate()

    const handleClickAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            let path = '/results'
            navigate(path, {
                state: {
                    gameID: gameID,
                    score: score
                }
            })

        }

    };

    return (

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
    )
}

export default QuestionsList


