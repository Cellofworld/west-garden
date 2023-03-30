import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import testIcon1 from '../../img/icons/test1.png';
import testIcon2 from '../../img/icons/test2.png';
import { activateQuiz } from '../../store/slice/QuizSlice';
import Quiz from './Quiz';
import './test.css'

function Test() {

  const activeQuiz = useSelector((state) => state.quiz.activeQuiz)

  const dispatch = useDispatch();


  return (
      <div className='test'>
        {
          activeQuiz !== true ? 
          <div className='test-activate'>
            <div className="test-title">Какая квартира подойдет именно вам?</div>
            <div className="test-subtitle">Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости</div>
            <button 
              className='test-button'
              onClick={e => dispatch(activateQuiz(true))}
                >Пройти тест</button>
            <div className="test-icon-cont">
                <img className='test-icon' src={testIcon1} alt='test-icon' />
                <img className='test-icon' src={testIcon2} alt='test-icon' />
            </div>
          </div> 
          : 
          <Quiz />
        }
        </div>

  )
}

export default Test