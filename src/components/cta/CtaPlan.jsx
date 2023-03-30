import './ctaCss/ctaPlan.css';
import planImg from '../../img/cta/plan.png';

function CtaPlan() {
  return (
    <div className='cta-plan'>
        <div className="cta-plan-desc-cont">
          <div className="cta-plan-cont-title">
            <div className="cta-desc-title">Посмотрите <br></br> все планировки и форматы квартир</div>
            <div className="cta-desc-sub">Скачайте каталог с планировками, полным описанием и стоимостью</div>
            <div className="cta-plan-record-cont">
                <form className='cta-plan-form'>
                    <input className='cta-record-input' />
                    <button className='cta-plan-record-button'>Посмотреть планировки</button>
                </form>
                <div className="cta-plan-record-conf">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
            </div>
          </div>
            <div className="cta-plan-img-cont">
              <img className='cta-plan-img' src={planImg} alt='ctaImg' />
            </div>
        </div>
    </div>
  )
}

export default CtaPlan