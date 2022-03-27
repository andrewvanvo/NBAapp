import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';


function QuestionsList(props) {
    // Choosing 4 players - currently, ends of array 

    let gameID = props.gameID
    let playerArray = props.usablePlayers

    let player1 = playerArray[0]
    let player2 = playerArray[1]
    let player3 = playerArray[playerArray.length - 1]
    let player4 = playerArray[playerArray.length - 2]

    // Next three functions give other answer options 
    function answerOne(correctAnswer) {
        let newAnswer = correctAnswer + 2;
        return newAnswer.toString();
    };

    function answerTwo(correctAnswer, firstAnswer) {
        let newAnswer = 0;
        if (correctAnswer == 0) {
            newAnswer = 5;
        } else if (correctAnswer - 3 < 0) {
            newAnswer = 3;
        } else {
            newAnswer = correctAnswer - 3;
        }
        while (newAnswer == firstAnswer || newAnswer == correctAnswer) {
            newAnswer += 1;
        }
        return newAnswer.toString();
    };

    function answerThree(correctAnswer, firstAnswer, secondAnswer) {
        let newAnswer = 0;
        if (correctAnswer == 0) {
            newAnswer = 7;
        } else if (correctAnswer - 6 < 0) {
            newAnswer = 6;
        } else {
            newAnswer = correctAnswer - 6;
        }
        while (newAnswer == firstAnswer || newAnswer == correctAnswer || newAnswer == secondAnswer) {
            newAnswer += 1;
        }
        return newAnswer.toString();
    };

    const questions = [
        {
            question: `How many points did ${player1.player.firstname} ${player1.player.lastname} have this game?`,
            options: [
                { answer: player1.points, isCorrect: true },
                { answer: answerOne(parseInt(player1.points)), isCorrect: false },
                { answer: answerTwo(parseInt(player1.points), answerOne(parseInt(player1.points))), isCorrect: false },
                { answer: answerThree(parseInt(player1.points), answerTwo(parseInt(player1.points), answerOne(parseInt(player1.points)))), isCorrect: false }
            ]
        },
        {
            question: `How many assists did ${player2.player.firstname} ${player2.player.lastname} have this game?`,
            options: [
                { answer: answerOne(parseInt(player2.assists)), isCorrect: false },
                { answer: answerTwo(parseInt(player2.assists), answerOne(parseInt(player2.assists))), isCorrect: false },
                { answer: player2.assists, isCorrect: true },
                { answer: answerThree(parseInt(player2.assists), answerTwo(parseInt(player2.assists), answerOne(parseInt(player2.assists)))), isCorrect: false }
            ]
        },
        {
            question: `How many rebounds did ${player3.player.firstname} ${player3.player.lastname} have this game?`,
            options: [
                { answer: answerOne(parseInt(player3.totReb)), isCorrect: false },
                { answer: answerTwo(parseInt(player3.totReb), answerOne(parseInt(player3.totReb))), isCorrect: false },
                { answer: answerThree(parseInt(player3.totReb), answerTwo(parseInt(player3.totReb), answerOne(parseInt(player3.totReb)))), isCorrect: false },
                { answer: player3.totReb, isCorrect: true }
            ]
        },
        {
            question: `How many steals did ${player4.player.firstname} ${player4.player.lastname} have this game?`,
            options: [
                { answer: answerOne(parseInt(player3.steals)), isCorrect: false },
                { answer: player4.steals, isCorrect: true },
                { answer: answerTwo(parseInt(player3.steals), answerOne(parseInt(player3.steals))), isCorrect: false },
                { answer: answerThree(parseInt(player3.steals), answerTwo(parseInt(player3.steals), answerOne(parseInt(player3.steals)))), isCorrect: false }
            ]
        }
    ];

    function shuffleAnswers(answersArray) {
        for (let i = answersArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answersArray[i], answersArray[j]] = [answersArray[j], answersArray[i]];
        }
    }

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
    shuffleAnswers(questions[currentQuestion].options);
    console.log(questions);

    return (

        <>

            <div className='question-section'>
                <div className='question-text'>{questions[currentQuestion].question}</div>
            </div>
            <br></br>

            <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>

            <br></br>
            <ButtonGroup variant='contained'>
                {questions[currentQuestion].options.map((option, index) => (
                    <Button onClick={() => handleClickAnswer(option.isCorrect)}>{option.answer}</Button>
                ))}
            </ButtonGroup>


        </>
    )
}

export default QuestionsList


