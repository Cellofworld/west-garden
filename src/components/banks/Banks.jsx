import React from 'react';
import { data } from '../../dbImg/db';
import sberProtect from '../../img/icons/sbePprotec.svg';
import './banks.css'

function Banks() {
  return (
    <div className='banks block'>
        <div className="title">Самые выгодные условия кредитования от 20 банков</div>
        <div className="banks-img-cont">
            {
                data.banks.map(el => (
                    <img className='bank-img' src={el.url} alt='bankImg' key={el.id} />
                ))
            }
        </div>
        <div className="bank-percent-cont">
            <div className="bank-percent-points">
                <div className="bank-percent-point">
                    <div className="bank-percent-point-title">от 4,29% годовых</div>
                    <div className="bank-percent-point-subtitle">Наш ипотечный брокер подберет для вас лучшие условия от 20 банков; Господдержка на протяжении всего срока ипотеки</div>
                    <button 
                        className='bank-button ipo-button'
                    >Рассчитать ипотеку</button>
                </div>
                <div className="bank-percent-point">
                    <div className="bank-percent-point-title-cont">
                        <div className="bank-percent-point-title">30%</div>
                        <div className="bank-percent-point-subtitle-desc">первоначальный взнос</div>
                    </div>
                    <div className="bank-percent-point-subtitle">Беспроцентная рассрочка от застройщика на 12 месяцев при первоначальном взносе 30%</div>
                    <button
                        className='bank-button percent-button'
                    >Узнать условия рассрочки</button>
                </div>
            </div>
            <div className="bank-protect">
                <img className='sberProtect' src={sberProtect} alt='sberProtect' />
                <div className="bank-protect-title">Покупка защищена экскроу-счетом от Сбербанка</div>
                <div className="bank-protect-subtitle">Это означает, что мы получим деньги только после подписания акта приема-передачи.</div>
            </div>
        </div>
    </div>
  )
}

export default Banks