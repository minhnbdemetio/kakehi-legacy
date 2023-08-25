import React from 'react'
import './style.scss'

interface IProps { }

const Header: React.FC<IProps> = () => {

    return <>
        <div className='header'>
            <img className='logo' src='/logo.png' />
            <button className='menu-btn'>
                <img src='/menu-icon.svg' />
            </button>
        </div>

    </>
}

export default Header 