import React from 'react'
import './style.scss'

interface IProps { }

const Header: React.FC<IProps> = () => {

    return <>
        <div className='header'>
            <div className='header-items'>
                <img className='logo' src='/logo.png' />
                <button className='menu-btn'>
                    <img src='/menu-icon.svg' />
                </button>
            </div>
        </div>

    </>
}

export default Header 