import React from 'react'
import Banks from './components/banks/Banks'
import ChildSquare from './components/childSquare/ChildSquare'
import Claster from './components/claster/Claster'
import Cta from './components/cta/Cta'
import CtaCost from './components/cta/CtaCost'
import Estetic from './components/estetic/Estetic'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Healthy from './components/healthy/Healthy'
import Inteko from './components/inteko/Inteko'
import Interier from './components/interier/Interier'
import Location from './components/location/Location'
import MainTitle from './components/mainTitle/MainTitle'
import NoCars from './components/noCars/NoCars'
import Oasis from './components/oasis/Oasis'
import Panoram from './components/panoramWindow/Panoram'
import Possibility from './components/possibility/Possibility'
import Repair from './components/repair/Repair'
import Status from './components/status/Status'
import Test from './components/test/Test'
import View from './components/view/View';
import { data } from './dbImg/db';
import './mainCss/main.css';

function WestGardenApp() {
  return (
    <div className='west-garden'>
        <Header />
        <MainTitle />
        <Location />
        <View />
        <Cta />
        <Claster />
        <Estetic />
        <Possibility data={data.aparts} title={'Более 100 свободных квартир редких форматов'} />
        <Panoram />
        <Possibility data={data.interier} title={'Максимальный комфорт в квартире'} />
        <Test />
        <Repair data={data.repair} />
        <Interier />
        <NoCars />
        <Oasis />
        <Healthy data={data.healthy} />
        <ChildSquare />
        <Possibility data={data.infro} title={'Жилой комплекс с собственной инфраструктурой'} />
        <Cta />
        <Status />
        <Possibility data={data.comfort} title={'Максимально комфортная среда для жизни'} />
        <CtaCost />
        <Inteko />
        <Banks />
        <Test />
        <Footer />
    </div>
  )
}

export default WestGardenApp