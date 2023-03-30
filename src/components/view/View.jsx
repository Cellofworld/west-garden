import React from 'react'
import Slider from '../slider/Slider';
import { data } from '../../dbImg/db';



function View() {



  return (
    <div className='view block'>
        <div className="title">Наслаждайтесь видами из окон своей квартиры</div>
        <Slider 
     
        dataImg={data.mainSlider} />
    </div>
  )
}

export default View