import React from 'react'
import Slider from '../../slider/Slider';
import riverIcon from '../../../img/icons/riverline.svg'
import parkIcon from '../../../img/icons/parkline.svg'


function ClasterSlider({title, subtitle, data, type }) {

  return (
    <div className={`claster-slider ${type}`}>
        <div className="claster-title-cont">
            <div className="claster-title-items">
                <div className="claster-title">{title}</div>
                {
                    title === 'River Line' ? 
                    <img className='clasterIcon' src={riverIcon} alt='riverIcon' /> 
                    : 
                    <img className='clasterIcon' src={parkIcon} alt='parkIcon' /> 
                }
            </div>
            <div className="claster-subtitle-items">
                <div className="claster-subtitle">{subtitle}</div>
                <button 
                    className='see-planer-btn'

                >
                        Посмотреть планировки
                    </button>
            </div>
        </div>
        <div className="claster-slider-cont">
            <Slider dataImg={data} />
        </div>
    </div>
  )
}

export default ClasterSlider