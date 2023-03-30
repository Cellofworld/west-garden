import React from 'react'

function InterierCard({data, title, desk}) {

  return (
    
        <div className={`interier-card card-${desk}`}>
            <div className="interier-card-title-cont">
                <div className="interier-card-title">{title}</div>
                <button className='interier-card-button'>Скачать дизайн-буклет</button>
            </div>
            <div className="interier-items-cont">
                {
                    data.map(el => (
                        <div className={`interier-card-${el.id}`} key={el.id}>
                            {
                                el.title ? 
                                <div className='interier-card-desc-cont'>
                                    <img className='interier-card-desc-img' src={el.url} alt='interier-card-desc-img' />
                                    <div className="interier-card-desc-title">{el.title}</div>
                                    <div className="interier-card-desc-subtile">{el.subtitle}</div>
                                </div> 
                                : <img className='interier-card-img' src={el.url} alt='interier-card-img' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default InterierCard