import React from 'react'
import Slider from '../slider/Slider';
import { data } from '../../dbImg/db';
import './oasis.css'

function Oasis() {

  return (
    <div className='oasis block'>
        <div className="title">Зелёный оазис <br></br> в старых границах Москвы</div>
        <div className="subtitle">Погрузитесь в мир будущего с современными архитектурными строениями посреди сада</div>
        <Slider dataImg={data.oasisSlider} />
    </div>
  )
}

export default Oasis