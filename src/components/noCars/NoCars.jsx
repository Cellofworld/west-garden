import React from 'react';
import noCarImg from '../../img/otherImg/bg_5.png';
import carProtect from '../../img/otherImg/bg_6.png';
import carProtectIcon from '../../img/icons/carProtected.svg';
import './noCars.css'

function NoCars() {
  return (
    <div className='no-cars'>
        <div className="no-cars-main block">
            <div className="title">Двор без машин — вся парковка под землёй</div>
            <div className="subtitle">Наслаждайтесь изобилием деревьев и кустарников во дворе, никаких машин — только пустые тротуарные дорожки и обилие цветов и кустарников</div>
            <img className='no-car-img' src={noCarImg} alt='noCarImg' />
        </div>
        <div className="cars-protect">
        <img className='car-protect-img' src={carProtect} alt='carProtect' />
        <div className="cars-protect-items">
            <div className="cars-protect-desc-cont">
                <img className='cars-protect-icon-img' src={carProtectIcon} alt='carProtectIcon' />
                <div className="cars-protect-desc-title">Машины попадают на подземный паркинг без заезда во двор</div>
                <div className="cars-protect-desc-subtitle">Паркинг защищен системой контроля доступа</div>
            </div>
            <div className="cars-parking">
                <div className="cars-parking-item">
                    <div className="parking-title">1328 мест</div>
                    <div className="parking-subtitle">в подземном паркинге</div>
                </div>
                <div className="cars-parking-item">
                    <div className="parking-title">93 места</div>
                    <div className="parking-subtitle">на гостевой парковке за территорией ЖК</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NoCars