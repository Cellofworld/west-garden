import React from 'react';
import mapImg from '../../img/map/location.png';
import panoramIcon from '../../img/icons/panorama.svg';
import './location.css'

function Location() {
  return (
    <div className='location block'>
        <div className="subtitle">Престижное расположение</div>
        <div className="title">Один из самых зелёных районов столицы — Раменки</div>
        <div className="location-map">
            <img className='location-map' src={mapImg} alt='location' />
        </div>
        <div className="location-desc-cont">
            <div className="location-desc">ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»</div>
            <button className='location-button'>
                <img className='panorama-icon' src={panoramIcon} alt='panoramaIcon'/>
                <div className="panorama-title">Панорама района 360˚</div>
            </button>
        </div>
    </div>
  )
}

export default Location