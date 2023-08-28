import CardDescription from '@/app/components/CardDescription'
import SectionTitle from '@/app/components/SectionTitle'
import React from 'react'

import './style.scss'


interface IProps {
    titlePosition: 'left' | 'right'
    title: string
    subtitle: string
    img: string
    items: { label?: string, description: string }[]
}

const DescriptionSection: React.FC<IProps> = ({ img, items, subtitle, title, titlePosition }) => {

    return <div className='description-section '>
        <SectionTitle position={titlePosition} subtitle={subtitle} title={title} />

        <div className='description-section-content  bg-transparent'>

            <div className='description-section-img' style={{ backgroundImage: `url(${img})` }} />



            <ul className='description-section-content-items pb-14 px-7 grid grid-cols-1 gap-7'>
                {items.map((item, index) => <li key={index}>
                    <CardDescription label={item.label} description={item.description} />
                </li>)}
            </ul>

        </div>

    </div>
}

export default DescriptionSection

