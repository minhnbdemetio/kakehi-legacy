import React from 'react'
import './style.scss'

interface IProps {
    children: any
    src: string
    ratio: number
}

const BackgroundSection: React.FC<IProps> = ({ children, src, ratio }) => {
    return <div className='background-section-container' style={{ backgroundImage: `url(${src})`, aspectRatio: ratio }} >
        <div>
            {children}
        </div>
    </div>
}

export default BackgroundSection