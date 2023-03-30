import React from 'react';
import arrowRight from '../../img/icons/arrow-right-blue.svg';
import panoramImg from '../../img/otherImg/panoram.png';
import './panoram.css'

function Panoram() {
  return (
    <div className='panoram block'>
        <div className="title">Панорамные окна</div>
        <div className="subtitle">Планировки квартир продуманы таким образом, что панорамный вид на город открывается уже при входе в квартиру</div>
        <button className='panoram-button'>
            <div className="panoram-button-title">Узнать стоимость квартиры</div>
            <img className='arrow-right' src={arrowRight} alt='arrowRight' />
        </button>
        <div className="panoram-img-cont">
            <img className='panoram-img' src={panoramImg} alt='panoramImg'/>
        </div>
    </div>
  )
}

export default Panoram