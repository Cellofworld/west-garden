import React from 'react';
import winIcon from '../../img/icons/award.svg'

function Winner() {
  return (
    <div className='winner'>
        <img className='winner-img' src={winIcon} alt='winImg' />
        <div className="winner-title">Победитель федеральной премии Urban Awards 2019</div>
    </div>
  )
}

export default Winner