import './ctaCss/ctaCost.css'

function CtaCost() {
  return (
    <div className='cta-cost'>
        <div className="cta-cost-title">Каждые 10 дней стоимость квартиры растет на 5%</div>
        <div className="cta-cost-subtitle">Зафиксируйте текущую цену на квартиру прямо сейчас</div>
        <form className='cta-cost-form'>
            <input 
              className='cta-cost-input'
             />
            <button
              className='cta-cost-button'
              >Зафиксировать цену</button>
        </form>
            <div className="cta-cost-conf">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
    </div>
  )
}

export default CtaCost