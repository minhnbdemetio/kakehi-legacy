import React from 'react'
import "./style.scss"

interface IProps {
    title: string
    subtitle: string
    position: 'right' | 'left'
}

const SectionTitle: React.FC<IProps> = ({ title, subtitle, position }) => {


    return <div className={`section-title-container  flex flex-col position-${position}`}>
        <p className='subtitle text-4xl'>{subtitle}</p>
        <p className={`text-2xl mx-7 font-bold whitespace-pre title`}>{title}</p>
    </div>
}


export default SectionTitle