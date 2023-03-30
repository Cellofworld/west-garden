import React from 'react'

function CtaPres() {
  return (
    <div className='cta'>
        <div className="cta-desc-cont">
            <div className="cta-desc-sub">Посмотрите все планировки и форматы квартир</div>
            <div className="cta-desc-title">Скачайте каталог с планировками, полным описанием и стоимостью</div>
            <div className="cta-record-cont">
                <div className="cta-record-title">Закрепить за номером</div>
                <form>
                    <input className='cta-record-input' />
                    <button className='cta-record-button'>Посмотреть планировки</button>
                </form>
                <div className="cta-record-conf">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
            </div>
            <div className="cta-img-cont">
            </div>
        </div>
    </div>
  )
}

export default CtaPres