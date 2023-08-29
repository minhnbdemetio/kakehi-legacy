import React from 'react'
import "./style.scss"
import './responsive.css'

interface IProps {
    fistTitle?: string
    secondTitle: string
    subtitle: string
    position: 'right' | 'left'
}

const SectionTitle: React.FC<IProps> = ({ fistTitle, secondTitle, subtitle, position }) => {


    return <div className={`section-title-container relative  flex flex-col position-${position}`}>
        <p className='subtitle relative text-4xl xl:text-6xl xl:font-medium '>{subtitle}</p>
        <div className='title'>
            <div>
                <p className={`text-2xl z-20 mx-7 text-right  font-bold whitespace-normal  xl:pl-16.2/3 xl:pt-18s xl:text-3xl`}>{fistTitle}</p>
                <p className={`text-2xl z-20 mx-7 text-right whitespace-normal font-bold  xl:pl-16.2/3 xl:text-4xl`}>{secondTitle}</p>
            </div>
        </div>
    </div>
}


export default SectionTitle