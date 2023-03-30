import React from 'react';
import arrowRight from '../../img/icons/arrow-right-blue.svg'

function PossibilityCard({data}) {
  return (
    <div className='possibility-card'>
        <div className="possibility-card-desc-cont">
            <div className="possibility-card-desc-title">{data.title}</div>
            <div className="possibility-card-desc-subtitle">{data.subtitle}</div>
            <button className='possibility-button'>
                <div className="possibility-card-button-title">Узнать стоимость</div>
                <img className='possibility-arrow-right' src={arrowRight} alt='arrowRight' />
            </button>
        </div>
        <div className="possibility-card-img-cont">
            <img className='possibility-card-img' src={data.url} alt='possibility-card-img' />
        </div>
    </div>
  )
}

export default PossibilityCard