import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerNumber } from '../../store/slice/QuizSlice';

function QuizTel({data}) {

    const dispatch = useDispatch();
    const {userAnswer} = useSelector(state => state.quiz.answer[5])
    const sending = data

  return (
    <div className='quiz-tel'>
        <form className='quiz-tel-form'>
            <input
                className='quiz-tel-form-input'
                value={userAnswer}
                placeholder='+7-___-__-__'
                onChange={e => dispatch(answerNumber((e.target.value)))}
            />
            {
             sending === null || userAnswer === '' ?
             <div 
             className='quiz-tel-form-btn-dis'
         >
             {sending === null ? 'Получить варианты' : `Получить варианты ${sending.title}`}
         </div> : 
              <div 
             className='quiz-tel-form-btn'
         >
             {sending === null ? 'Получить варианты' : `Получить варианты ${sending.title}`}
         </div>
            }
            
        </form>
        <div className='form-desc'>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
    </div>
  )
}

export default QuizTel