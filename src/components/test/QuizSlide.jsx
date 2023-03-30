import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerRealty, answerLayout, answerSquare ,answerParking ,answerMessanger } from '../../store/slice/QuizSlice';
import QuizTel from './QuizTel';

function QuizSlide({data}) {

   const {title, question, answerId, answerSub} = data;
   const dispatch = useDispatch();
   const answerBlock = useSelector(state => state.quiz.answer);

   function answerHandler(el) {
    if (el.typeQ === 'realty') {
        dispatch(answerRealty({title: el.desc, id: el.id}))
    } else if (el.typeQ === 'layout') {
        dispatch(answerLayout({title: el.desc, id: el.id}))
    } else if (el.typeQ === 'square') {
        dispatch(answerSquare({title: el.desc, id: el.id}))
    } else if (el.typeQ === 'parking') {
        dispatch(answerParking({title: el.desc, id: el.id}))
    } else if (el.typeQ === 'messanger') {
        dispatch(answerMessanger({title: el.desc, id: el.id}))
    }
   return el.id
   }


  return (
    <div className='quiz-slide'>
        <div className="quiz-title">{title}</div>
        <div className="quiz-card-cont">
            {
                question.map((el) => (
                    <div 
                        className='quiz-card'
                        key={el.id} 
                        value={el.desc}
                        onClick = {e => answerHandler(el)}
                        >
                            {
                                
                                answerBlock[answerId].userAnswer === null ? 
                                <div className='quiz-card-check'></div> :
                                <div className={el.id === answerBlock[answerId].userAnswer.id ? 'quiz-card-check card-active' : 'quiz-card-check'}></div>

                            }
                        <div className={el.url ? 'quiz-img-cont' : 'quiz-img-cont-dis'}>
                            <img className='quiz-img' src={el.url} alt='quizImg'/>
                        </div>
                        <div className="quiz-desc">{el.desc}</div>
                        
                    </div>
                ))
            }
        </div>
            {
                answerSub === 'messanger' ? <QuizTel data ={answerBlock[answerId].userAnswer} /> : <></>
            }
    </div>
  )
}

export default QuizSlide