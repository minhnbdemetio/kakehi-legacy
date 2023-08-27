'use client'


import React, { useCallback } from 'react'
import './style.scss'

interface IProps { }

const Header: React.FC<IProps> = () => {


    const openMobileSidebar = useCallback((e: React.MouseEvent) => {
        const targetId = e.currentTarget.getAttribute("data-target")
        if (targetId) {
            const element = document.querySelector(targetId)
            if (element) {
                element.classList.add("show")
            }
        }
    }, [])

    return <>
        <div className='header'>
            <div className='header-items'>
                <img className='logo' src='/logo.png' />

                <button className='menu-btn' onClick={openMobileSidebar} data-target="#main-mobile-sidebar" type="button" >
                    <img src='/menu-icon.svg' />
                </button>

            </div>
        </div>

    </>
}

export default Header 