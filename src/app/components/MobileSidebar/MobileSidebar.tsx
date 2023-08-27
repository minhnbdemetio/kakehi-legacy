
'use client'

import React, { useCallback, useMemo } from 'react'
import './styles.scss'

import menuItems from '../../configs/menuItems'

interface IProps { }

const MobileSidebar: React.FC<IProps> = () => {


    const renderMenuItems = useMemo(() => {
        return menuItems.map((item) => {
            return <li key={item.label} className='btn-primary btn rounded'>
                <a ><p className='text-lg'>{item.label}</p></a>
            </li>
        })
    }, [])

    const closeSidebar = useCallback((e: React.MouseEvent) => {
        const targetId = e.currentTarget.getAttribute("data-close")

        if (targetId) {
            const element = document.querySelector(targetId)

            if (element) {
                element.classList.remove("show")
            }
        }
    }, [])


    return <div id="main-mobile-sidebar" className='w-full h-full bg-primary fixed top-0 p-5 right-0 right-sidebar'>
        <div className='flex justify-end mb-5'>
            <button data-close="#main-mobile-sidebar" onClick={closeSidebar} className='btn btn-icon p-0'>
                <img alt='close menu sidebar' src="/icons/close-icon.png" />
            </button>
        </div>

        <ul className='grid grid-cols-1 gap-3'>
            {renderMenuItems}
        </ul>
    </div>
}

export default MobileSidebar