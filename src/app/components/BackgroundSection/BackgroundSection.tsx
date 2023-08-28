import React, { PropsWithChildren } from 'react'
import './style.scss'

interface IProps extends PropsWithChildren {
    src: string
    ratio: number
    style?: React.CSSProperties
}

const BackgroundSection: React.FC<IProps> = ({ children, src, ratio, style = {} }) => {
    return <div className='relative'>
        <div className='background-section-container absolute top-0 left-0 w-full' style={{ backgroundImage: `url(${src})`, aspectRatio: ratio }} >
            <div style={style}>
            </div>
        </div>

        <div className='relative' style={{ aspectRatio: ratio, width: '100%' }}>
            {children}
        </div>
    </div>
}

export default BackgroundSection