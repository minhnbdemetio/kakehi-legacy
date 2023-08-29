import React from 'react'
import './style.scss'

interface IProps {
    subTitle?: string
    title: string
    divider?: boolean
}

const PageTitle: React.FC<IProps> = ({ divider = false, subTitle, title }) => {
    return <div className='flex flex-col justify-center items-center'>
        {subTitle && <p className='text-xl sub-title'>{subTitle}</p>}
        <p className={'text-2xl font-bold xl:text-3xl' + (divider ? 'divider' : "")} >{title}</p>
    </div>
}

export default PageTitle