import React from 'react'
import './style.scss'

interface IProps {
    label?: string
    labelBackgroundImg?: string
    description: string
    background?: "default" | 'card-primary'
}

const CardDescription: React.FC<IProps> = ({ description, label, background = 'default', labelBackgroundImg }) => {

    return <div className={`card-description flex items-center background-${background}`}>
        {!!label && <div className='card-description-label  text-center'
            style={{ backgroundImage: !!labelBackgroundImg ? `url(${labelBackgroundImg})` : 'none' }}
        ><p className='text-md'>{label}</p></div>}
        <p className='card-description-content flex-auto px-7 py-5 text-md'>{description}</p>
    </div>
}

export default CardDescription  