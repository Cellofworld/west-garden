import { createSlice } from "@reduxjs/toolkit";
import { quizDb } from "../../db/quizDb";

const initialState = {
    activeQuiz: false,
    navigateQiuz: 0,
    question: quizDb,
    answer: [
       {
        title: 'realty', 
        userAnswer: null,
       },
       {
        title: 'layout', 
        userAnswer: null,
       },
       {
        title: 'square', 
        userAnswer: null,
       },
       {
        title: 'parking', 
        userAnswer: null,
       },
       {
        title: 'messanger', 
        userAnswer: null,
       },
       {
        title: 'number', 
        userAnswer: '',
       },
    ]
  }



export const QuizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        activateQuiz: (state, action) => {
            state.activeQuiz = action.payload
        },
        numberSlide: (state, action) => {
            state.navigateQiuz += action.payload
        },
        answerRealty: (state, action) => {
            state.answer[0].userAnswer = action.payload
        },
        answerLayout: (state, action) => {
            state.answer[1].userAnswer = action.payload
        },
        answerSquare: (state, action) => {
            state.answer[2].userAnswer = action.payload
        },
        answerParking: (state, action) => {
            state.answer[3].userAnswer = action.payload
        },
        answerMessanger: (state, action) => {
            state.answer[4].userAnswer = action.payload
        },
        answerNumber: (state, action) => {
            state.answer[5].userAnswer = action.payload
        },
          
    }
})

export const {numberSlide, activateQuiz, answerRealty, answerLayout, answerSquare ,answerParking, answerNumber ,answerMessanger} = QuizSlice.actions;
export default QuizSlice.reducer