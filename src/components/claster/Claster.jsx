import ClasterSlider from './clasterSlider/ClasterSlider';
import { data } from '../../dbImg/db';
import './claster.css'

function Claster() {
  return (
    <div className='claster'>
        <ClasterSlider data={data.riverLineSlider} title='River Line' subtitle='Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки Раменки' type='river'/>
        <ClasterSlider data={data.parkLineSlider} title='Park Line' subtitle='Семь 14-этажных жилых корпусов,  расположенных вдоль Матвеевского леса' type='park'/>
    </div>
  )
}

export default Claster