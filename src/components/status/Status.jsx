import React from 'react';
import map from '../../img/map/map.png';
import './status.css'

function Status() {
  return (
    <div className='status block'>
        <div className="title">Статусное окружение вашего будущего дома</div>
            <div className="status-main-cont">
                
                <div className="status-points-cont">
                    <div className="status-pionts-title">Показать на карте</div>
                    <div className="status-pionts">
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                            />
                            <div className="status-point-desc">Школы и детсады</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">Фитнес и спорт</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">Здоровье, клиники</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">Парки и водоёмы</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">Торговые центры</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">ВУЗы</div>
                        </div>
                        <div className="status-point">
                            <input 
                                className='input-status'
                                type='checkbox' 
                                />
                            <div className="status-point-desc">Достопримечательности</div>
                        </div>
                    </div>
                </div>
                <div className="status-map">
                    <img className='status-map' src={map} alt='statusMap' />
                </div>
            </div>
    </div>
  )
}

export default Status