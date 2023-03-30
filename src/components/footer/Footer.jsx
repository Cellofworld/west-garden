import React from 'react';
import LogoEs from '../logo/LogoEs';
import MainLogo from '../logo/MainLogo';
import map from '../../img/map/location.png';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-title-cont">
            <div className="footer-title">Жилой комплекс «West Garden» — все преимущества жизни на природе</div>
            <MainLogo />
        </div>
        <div className="footer-title-desc">
            <div className="footer-points-cont">
                <div className="footer-point">
                    <LogoEs/>
                </div>
                <div className="footer-point">
                    <div className="footer-point-title">Офис продаж</div>
                    <div className="footer-point-subtitle">Москва, Лужнецкая наб. 2/4, строение 17, офис 308</div>
                </div>
                <div className="footer-point">
                    <div className="footer-point-title">Телефон</div>
                    <div className="footer-point-subtitle">+7 495 845 19 34</div>
                </div>
            </div>
            <img className='footer-img' src={map} alt='footerMap' />
        </div>
    </div>
  )
}

export default Footer