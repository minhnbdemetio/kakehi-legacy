import React from 'react'
import items from './items'
import SectionTitle from '@/app/components/SectionTitle'
import './style.scss'
import CardDescription from '@/app/components/CardDescription'
import DescriptionSection from '../DescriptionSection'


interface IProps { }

const AspectsOfCompany: React.FC<IProps> = () => {

    return <ul className='grid grid-cols-1 aspects'>
        {items.map((item) => <li key={item.title}>
            <DescriptionSection img={item.img} items={item.items} subtitle={item.subtitle} title={item.title} titlePosition={item.titlePosition} />
        </li>)}
    </ul>
}

export default AspectsOfCompany
