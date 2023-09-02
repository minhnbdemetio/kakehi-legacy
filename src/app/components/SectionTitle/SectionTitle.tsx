import React from 'react'
import "./style.scss"
import './responsive.css'
import CLSX from 'clsx'

interface IProps {
    fistTitle?: string
    secondTitle: string
    subtitle: string
    position: 'right' | 'left'
}

const SectionTitle: React.FC<IProps> = ({ fistTitle, secondTitle, subtitle, position }) => {

    return <div className={CLSX({ [`section-title-container relative  flex flex-col position-${position} `]: true })}>
        <p className='subtitle relative text-4xl xl:text-6xl xl:font-medium '>{subtitle}</p>
        <div className='title'>
            <div>
                <p className={CLSX({
                    [`text-2xl z-20 mx-7  font-bold whitespace-normal  xl:pl-16.2/3 xl:pt-18s xl:text-3xl xl:mx-0`]: true,
                    [`text-right xl:text-left`]: position === 'right',
                    [`text-left xl:text-right`]: position === 'left',
                })}>{fistTitle}</p>
                <p className={CLSX({
                    [`text-2xl z-20 mx-7  whitespace-normal font-bold  xl:pl-16.2/3 xl:text-4xl xl:mx-0`]: true,
                    [`text-right xl:text-left`]: position === 'right',
                    [`text-left xl:text-right`]: position === 'left',

                })}>{secondTitle}</p>
            </div>
        </div>
    </div>
}


export default SectionTitle 