import React from 'react'
import items from './items'
import './style.scss'
import DescriptionSection from '../DescriptionSection'


interface IProps { }

const AspectsOfCompany: React.FC<IProps> = () => {

    return <ul className='grid grid-cols-1 aspects mt-5 xl:mt-16.2/3 '>
        {items.map((item) => <li key={item.firstTitle} className={item.className}>
            <DescriptionSection type='single-image' img={item.img} items={item.items} subtitle={item.subtitle} firstTitle={item.firstTitle} secondTitle={item.secondTitle} titlePosition={item.titlePosition} />
        </li>)}
    </ul>
}

export default AspectsOfCompany
