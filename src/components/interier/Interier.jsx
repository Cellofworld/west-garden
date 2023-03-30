import React from 'react'
import InterierCard from './InterierCard';
import { data } from '../../dbImg/db';
import CtaPlan from '../cta/CtaPlan';
import './interier.css'

function Interier() {
  return (
    <div className='interier'>
        <div className="title">2 варианта отделки</div>
        <InterierCard data={data.intLight} title='Светлая отделка' desk='light'/>
        <InterierCard data={data.intDark} title='Тёмная отделка' desk='dark'/>
        <CtaPlan />
    </div>
  )
}

export default Interier