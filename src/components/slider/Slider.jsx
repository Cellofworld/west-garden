import React, { useEffect, useState } from 'react';
import './slider.css';




function Slider({ width, height, autoPlay, autoPlayTime, dataImg }) {

  useEffect(() => {
      setImage(dataImg)
  }, [dataImg])

    const [image, setImage] = useState([]);
    const [paused, setPaused] = useState(false);
    const [touchPosition, setTouchPosition] = useState();
    const [activeIndex, setActiveIndex] = useState(0);


    function updateIndex(newIndex) {
      if (newIndex < 0) {
        newIndex = image.length -1
      } else if (newIndex >= image.length) {
        newIndex = 0
      }

      setActiveIndex(newIndex)
    }


    useEffect(() => {
      if (autoPlay) {
        const interval = setInterval(() => {
          if (!paused) {
            updateIndex(activeIndex +1);
          }
        }, autoPlayTime ? autoPlayTime : 2000)
  
        return () => {
          if (interval) {
            clearInterval(interval)
          }
        }
      }
    });

    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    }



    const handleTouchMove = (e) => {
      if (touchPosition === null) {
        return;
      }
  
      const currentPosition = e.touches[0].clientX;
      const direction = touchPosition - currentPosition;
  
      console.log(direction)
      if (direction > 8) {
        updateIndex(activeIndex +1);
      }
  
      if (direction < -8) {
        updateIndex(activeIndex -1);
      }
  
      setTouchPosition(null);
    }





  if (image === undefined) return <div>Loading</div> 

  return (
    <div 
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={(e) => handleTouchMove(e)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        width: width ? `${width}px`:'100%',
        height: '100%',
        overflow: 'hidden'
      }}
      >
      <button
            className='prev-arrow'
            onClick={() => updateIndex(activeIndex -1)}
          >
          </button>
      <div 
        className="slide-inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          display: 'flex',
          transition: 'transform 0.3s',
          whiteSpace: 'nowrap',
          height: '100%',
          width: '100%',
          position: 'relative'
        }}
        >
        {
          image.map((el) => (
            <div 
              className='slide-item'
              key={el.id}
              style={{
                height: '100%',
                minWidth: '100%',
        }}
        >
            <img 
                className='slide-img' 
                src={el.url} 
                alt='sliderImage' 
                style={{
                    width: width ? `${width}px` : `100%`,
                    height: height ? `${height}px` : '100%',
                }}
                />
            <div 
              className="slide-item-title" 
              style={{
                 whiteSpace: 'normal',
                }}>
                {
                  el.title
                }
            </div>
    </div>
          ))
        }
      
      </div>
        <button
            className='next-arrow'
            onClick={() => updateIndex(activeIndex +1)}
          ></button>
        <div className="dots">
          {
            image.map((el,i) => (
              <div 
                className={activeIndex === i ? 'dot dot-active' : 'dot'} 
                key={el.id}
                onClick={() => updateIndex(i)}
                >{el.desc}</div>
            ))
          }
        </div>
    </div>
  )
}

export default Slider