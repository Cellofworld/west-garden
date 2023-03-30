import React from 'react'
import MainLogo from '../logo/MainLogo';
import Winner from '../winner/Winner';
import './mainTitle.css'

function MainTitle() {
  return (
    <div className='m-t-c block'>
        <MainLogo />
        <div className="title">Жизнь в зеленом оазисе <br></br> в статусном районе Москвы</div>
        <div className="subtitle">Жилой комплекс бизнес-класса в 20 минутах от Кремля</div>
        <div className="m-t-i-c">
            <Winner />
            <div className="order-items">
                <div className="order-items-cont">
                    <div className="order-items-title">1 очередь</div>
                    <div className="order-items-sub">2022</div>
                </div>
                <div className="order-items-cont">
                    <div className="order-items-title">2 очередь</div>
                    <div className="order-items-sub">2023</div>
                </div>
            </div>
        </div>
        <div className="m-t-d-c">
            <div className="f-d-c future-title">
                <div className="f-d-t">20 гектаров</div>
                <div className="f-d-s">территории ЖК — это как полтора Зарядья</div>
            </div>
            <div className="s-d-c future-title">
                <div className="f-d-t">15 корпусов</div>
                <div className="f-d-s">по 12-14 этажей, просторная застройка</div>
            </div>
            <div className="t-d-c future-title">
                <div className="f-d-t">7 гектаров</div>
                <div className="f-d-s">приватного парка для жителей ЖК</div>
            </div>
            <div className="fo-d-c future-title">
                <div className="f-d-t">2 километра</div>
                <div className="f-d-s">набережной реки Раменка вдоль ЖК</div>
            </div>
        </div>
    </div>
  )
}

export default MainTitle