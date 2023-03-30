import './healthy.css'

function Healthy({data}) {
  return (
    <div className='healthy block'>
        <div className="title">Здоровый и активный <br></br>образ жизни</div>
        <div className="healthy-cards-cont">
            {
                data.map(el => (
                    <div className={`healthy-card-cont card-${el.id}`} key={el.id}>
                        {
                            el.subtitle ? 
                            <div className={`healthy-card card-desc-${el.id}`}>
                                <div className="healthy-card-icon-title">
                                    <img className='healthy-card-icon' src={el.url} alt='healthyIcon' />
                                    <div className="healthy-card-title">{el.title}</div>
                                </div>
                                <div className="healthy-card-subtitle">{el.subtitle}</div>
                            </div> 
                            : 
                            <div className='healthy-card-img-cont'>
                                <img className='healthy-card-img' src={el.url} alt='healthyImg' />
                                <div className="healthy-card-img-title">{el.title}</div>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Healthy