import './repair.css';

function Repair({data}) {
  return (
    <div className='repair'>
        <div className="repair-title-cont">
            <div className="title">Отделка от застройщика</div>
            <div className="subtitle">Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</div>
        </div>
        <div className="repair-items">
          {
              data.map(el => (
                  <div className="repair-card-cont" key={el.id}>
                      <img className='repair-img' src={el.url} alt='repair-img' />
                      <div className="repair-card-title">{el.title}</div>
                      <div className="repair-card-subtitle">{el.subtitle}</div>
                  </div>
                  ))

          }
        </div>
    </div>
  )
}

export default Repair