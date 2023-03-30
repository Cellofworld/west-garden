import React from 'react'
import PossibilityCard from './PossibilityCard';
import './possibility.css'

function Possibility({title, data}) {

  return (
    <div className='possibility block'>
        <div className="title">{title}</div>
        <div className="possibility-cards-cont">
            {
                data.map((el,i) => (
                    <PossibilityCard data={el} key={i} />
                ))
            }
        </div>
    </div>
  )
}

export default Possibility