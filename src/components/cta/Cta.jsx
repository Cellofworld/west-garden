import React, { useState } from 'react';
import arrow from '../../img/icons/arrowRight.svg';
import ctaImg from '../../img/cta/person.png';
import './ctaCss/cta.css';


function Cta() {

    const [number, setNumber] = useState('');

  return (
    <div className='cta'>
        <div className="cta-desc-cont">
            <div className="cta-subtitle">СПЕЦИАЛЬНО ДЛЯ ВАС</div>
            <div className="cta-title">Персональная презентация West Garden</div>
            <div className="cta-desc-points-cont">
                <div className="cta-point">
                    <img className='arrow-icon' src={arrow} alt='arrowIcon' />
                    <div className="point-title">Подробно расскажем про жилой комплекс</div>
                </div>
                <div className="cta-point">
                    <img className='arrow-icon' src={arrow} alt='arrowIcon' />
                    <div className="point-title">Ознакомитесь со всеми планировками и ценами</div>
                </div>
                <div className="cta-point">
                    <img className='arrow-icon' src={arrow} alt='arrowIcon' />
                    <div className="point-title">Прогуляетесь по благоустроенной набережной</div>
                </div>
            </div>
            <div className="cta-record-cont">
                <div className="cta-record-title">Закрепить за номером</div>
                <form className='cta-form'>
                    <input 
                        className='cta-record-input'
                        type='number'
                        value={number}
                        placeholder = {'+7 999-99-99'}
                        onChange = {(e) => setNumber(e.target.value)}
                        />
                    <button className='cta-record-button'>Записаться на презентацию</button>
                </form>
                <div className="cta-record-conf">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
            </div>
        </div>
            <div className="cta-img-person">
                <div className="cta-img-cont">
                     <img className='cta-img' src={ctaImg} alt='personImg' />
                </div>
                <div className="cta-desc-img">
                    <div className="cta-name-pro">Алёна Кирющенко</div>
                    <div className="cta-desc-pro">ведущий эксперт по недвижимости в ESTES</div>
                </div>
            </div>
    </div>
  )
}

export default Cta