import React from 'react';
import elevatorIcon from '../../img/icons/elevator.svg';
import elevatorIcon2 from '../../img/icons/elevator2.svg';
import starIcon from '../../img/icons/star.svg';
import estImg1 from '../../img/lobby/img-1.png';
import estImg2 from '../../img/lobby/img-2.png';
import estImg3 from '../../img/lobby/img-3.png';
import estImg4 from '../../img/lobby/img-4.png';
import './estetic.css'



function Estetic() {
  return (
    <div className='estetic block'>
      <div className="title">Современная эстетика лобби</div>
      <div className="estetic-items-cont">
        <div className="estetic-sub-cont">
          <div className="estetic-sub-desc-cont">
            <img className='elevator-icon' src={elevatorIcon} alt='elevatorIcon' />
            <div className="estetic-sub-desc">Центральные входные группы</div>
          </div>
          <div className="estetic-points-cont">
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Зоны ожидания и встреч</div>
            </div>
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Пост охраны</div>
            </div>
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Переговорная комната</div>
            </div>
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Колясочная</div>
            </div>
          </div>
          <div className="estetic-img-cont">
            <img className='est-img' src={estImg1} alt ='estImg1' />
            <img className='est-img' src={estImg2} alt ='estImg2' />
          </div>
        </div>
        <div className="estetic-sub-cont">
          <div className="estetic-sub-desc-cont">
            <img className='elevator-icon' src={elevatorIcon2} alt='elevatorIcon2' />
            <div className="estetic-sub-desc">Лифтовый холл</div>
          </div>
          <div className="estetic-points-cont">
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">2-4 лифта</div>
            </div>
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Грузовые и пассажирские</div>
            </div>
            <div className="estetic-point">
              <img className='star-icon' src={starIcon} alt='starIcon' />
              <div className="estetic-point-title">Ведущие производители</div>
            </div>
          </div>
          <div className="estetic-img-cont">
            <img className='est-img' src={estImg3} alt ='estImg3' />
            <img className='est-img' src={estImg4} alt ='estImg4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estetic