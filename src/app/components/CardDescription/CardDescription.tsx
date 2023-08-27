import React from 'react'
import './style.scss'

interface IProps {
    label?: string
    description: string
}

const CardDescription: React.FC<IProps> = ({ description, label }) => {

    return <div className='card-description flex items-center'>
        {!!label && <div className='card-description-label text-lg text-center'><p >{label}</p></div>}
        <p className='card-description-content flex-auto px-7 py-5 text-lg'>{description}</p>
    </div>
}

export default CardDescription  