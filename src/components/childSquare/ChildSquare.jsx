import React from 'react';
import iconprognoz from '../../img/icons/prognoz.svg';
import iconchekharda from '../../img/icons/chekharda.svg';
import icondruzhba from '../../img/icons/druzhba.svg';
import profIcon from '../../img/cta/viktoria.png';
import Slider from '../slider/Slider';
import development1 from '../../img/sliderImg/childSquare/vestibular.svg';
import development2 from '../../img/sliderImg/childSquare/vestibular-1.svg';
import development3 from '../../img/sliderImg/childSquare/hear.svg'
import { data } from '../../dbImg/db';
import './childSquare.css'


function ChildSquare() {
  return (
    <div className='child-square'>
        <div className="child-square-title-cont">
            <div className="child-square-title-desc">
                <div className="child-square-title">Нейродинамические детские площадки</div>
                <div className="child-square-subtitle">Игры на таких площадках помогут предотвратить трудности в детском саду или школе. Спроектированы совместно со специалистами в области неврологии, психологии и архитектуры.</div>
                <div className="child-square-icon-cont">
                    <img className='child-square-icon' src={iconprognoz} alt='icon' />
                    <img className='child-square-icon' src={iconchekharda} alt='icon' />
                    <img className='child-square-icon' src={icondruzhba} alt='icon' />
                </div>
            </div>
            <div className="child-square-prof-cont">
                <img className='child-square-prof-icon' src={profIcon} alt='profIcon' />
                <div className="child-square-prof-title">Виктория Ефимова, <br></br>автор методологии детских площадок, психофизиолог</div>
                <div className="child-square-prof-subtitle">Кандидат педагогических наук, автор книг и научных статей об исследовании мозга детей, руководитель клиники «Прогноз»</div>
            </div>
        </div>
        <Slider dataImg={data.childSquare} />
        <div className="child-square-development">
            <div className="child-square-development-title">Каждая площадка помогает развивать</div>
            <div className="child-square-development-help-cont">
                <div className="child-square-development-help-card">
                    <div className="child-square-development-help-card-title">Вестибулярную систему</div>
                    <img className='child-square-development-help-card-img' src={development1} alt='child-square-development-help' />
                </div>
                <div className="child-square-development-help-card">
                    <div className="child-square-development-help-card-title">Внимание и память ребенка</div>
                    <img className='child-square-development-help-card-img' src={development2} alt='child-square-development-help' />
                </div>
                <div className="child-square-development-help-card">
                    <div className="child-square-development-help-card-title">Зрительное и слуховое восприятие</div>
                    <img className='child-square-development-help-card-img' src={development3} alt='child-square-development-help' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChildSquare