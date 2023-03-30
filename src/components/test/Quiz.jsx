import { useSelector, useDispatch } from 'react-redux';
import { numberSlide } from '../../store/slice/QuizSlice';
import { activateQuiz } from '../../store/slice/QuizSlice';
import backArrow from '../../img/icons/arrow.svg'
import QuizSlide from './QuizSlide';



function Quiz() {

    const navigateQuiz = useSelector((state) => state.quiz.navigateQiuz);
    const data = useSelector((state) => state.quiz.question);
    const answer = useSelector((state) => state.quiz.answer)
    const dispatch = useDispatch();
    const nextBtnBlock = answer[navigateQuiz].userAnswer

    function handler(e) {
      if(navigateQuiz + e === -1) {
        dispatch(activateQuiz(false))
        dispatch(numberSlide(0))
      } else if (navigateQuiz + e !== data.length) {
        dispatch(numberSlide(e))
      }
    }


  return (
    <div className='quiz'>
      <div className="navigate-quiz">
        <div 
          className="back-button-cont"
          onClick={e => handler(-1)}
          >
          <img className='back-arrow' src={backArrow} alt='backArrow' />
            <div 
                className={`button-quiz-back`}
            >Назад</div>
        </div>
            <div className="brads">
              {
                data.map((el,i) => (
                  <div className={navigateQuiz === i ? `bread-active`: `bread`} key={i}></div>
                ))
              }
            </div>
      </div>
        <QuizSlide data={data[navigateQuiz].qu1}/>
        <div className="btn-block-nxt">
              {
                nextBtnBlock === null ? 
                <div className={ navigateQuiz === data.length -1 ? `button-quiz-next button-n` : `button-quiz-next-block`}>Дальше</div> : 
                <div 
                  className={ navigateQuiz === data.length -1 ? `button-quiz-next button-n` : `button-quiz-next button-a`}
                  onClick={e => handler(+1)}
              >Дальше</div>
              }
              
          </div>
        </div>
  )
}

export default Quiz