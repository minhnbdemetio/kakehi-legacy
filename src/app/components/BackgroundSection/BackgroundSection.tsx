import React from 'react'
import './style.scss'

interface IProps {
    children: any
    src: string
    ratio: number
}

const BackgroundSection: React.FC<IProps> = ({ children, src, ratio }) => {
    return <div className='relative'>
        <div className='background-section-container absolute top-0 left-0 w-full' style={{ backgroundImage: `url(${src})`, aspectRatio: ratio }} >
            <div>
            </div>
        </div>

        <div className='relative'>
            {children}
        </div>
    </div>
}

export default BackgroundSection