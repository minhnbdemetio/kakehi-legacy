import React from 'react'
import './style.scss'
import CLSX from 'clsx'

interface IProps {
    subTitle?: string
    title: string
    divider?: boolean
}

const PageTitle: React.FC<IProps> = ({ divider = false, subTitle, title }) => {
    return <div className='flex flex-col justify-center items-center'>
        {subTitle && <p className='text-xl sub-title'>{subTitle}</p>}
        <p className={CLSX({
            ["text-1.5xl font-bold xl:text-3xl"]: true,
            'divider': divider
        })} >{title}</p>
    </div>
}

export default PageTitle