import './inteko.css'

function Inteko() {
  return (
    <div className='inteko'>
      <div className="inteko-items-cont">
        <div className="inteko-title-cont">
          <div className="inteko-title">Девелопер ИНТЕКО</div>
          <div className="inteco-subtitle">Реализует лучшие проекты в сфере недвижимости на основе анализа и прогноза предпочтений человека</div>
        </div>
        <div className="inteko-points-cont">
          <div className="inteco-point">
            <div className="inteko-point-title">20 лет</div>
            <div className="inteko-point-subtitle">на рынке недвижимости Москвы и регионов</div>
          </div>
          <div className="inteco-point">
            <div className="inteko-point-title">80+ проектов</div>
            <div className="inteko-point-subtitle">жилых домов сдано в Москве</div>
          </div>
          <div className="inteco-point">
            <div className="inteko-point-title">5 000 000 м²</div>
            <div className="inteko-point-subtitle">общая площадь готовых объектов</div>
          </div>
          <div className="inteco-point">
            <div className="inteko-point-title">500 сотрудников</div>
            <div className="inteko-point-subtitle">в штате компании</div>
          </div>
        </div>
      </div>
      <div className="inteco-documents-cont">
        <div className="inteco-documents-title">Документы West Garden</div>
        <div className="inteco-documents-points">
          <div className="inteco-documents-point">Проектная документация</div>
          <div className="inteco-documents-point">Разрешение на строительство</div>
          <div className="inteco-documents-point">Проектная декларация (1 очередь)</div>
          <div className="inteco-documents-point">Проектная декларация (2 очередь)</div>
        </div>
      </div>
    </div>
  )
}

export default Inteko