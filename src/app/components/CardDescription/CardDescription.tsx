import React from 'react'
import './style.scss'
import './responsive.css'
import CLSX from 'clsx'

interface IProps {
    label?: string
    labelBackgroundImg?: string
    description: string
    background?: "default" | 'card-primary'
    size?: 'small' | 'medium'
    descriptionBold?: boolean
    descriptionAlign?: 'left' | "center" | 'right'

}

const CardDescription: React.FC<IProps> = ({ description, label, background = 'default', descriptionAlign = 'left', size = 'medium', descriptionBold = false, labelBackgroundImg }) => {

    const isSmall = size === 'small'
    const isMedium = size === 'medium'

    const descriptionOnly = !label


    return <div className={CLSX({
        [`card-description ${size} flex items-center background-${background}`]: true,

    })}>
        {!!label && <div className={CLSX({ ['card-description-label  text-center']: true })}
            style={{ backgroundImage: !!labelBackgroundImg ? `url(${labelBackgroundImg})` : 'none' }}
        ><p className={CLSX({ ["text-md xl:font-bold"]: true, ['xl:text-lg']: isSmall, ['xl:text-1.5xl']: isMedium })}>{label}</p></div>}
        <p className={CLSX({
            ["card-description-content flex-auto px-7 py-5 text-md xl:text-xl"]: true,
            'font-bold': descriptionBold,
            [`text-${descriptionAlign}`]: true,
            'xl:px-22': descriptionOnly,
            'xl:py-17.1/3': descriptionOnly,
        })}>{description}</p>
    </div>
}

export default CardDescription  