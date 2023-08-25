import React from 'react'
import './style.scss'

interface IProps {
    src: string
    children: any
}

const BackgroundWithSlogan: React.FC<IProps> = ({ src, children }) => {
    return <div className='wrapper' style={{ backgroundImage: `url(${src})` }}>
        <div>{children}</div>
    </div>
}

export default BackgroundWithSlogan