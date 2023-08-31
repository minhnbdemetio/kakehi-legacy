'use client'


import React, { useCallback } from 'react'
import './style.scss'
import './responsive.css'
import menuItems from '../../configs/menuItems'
import Link from 'next/link'

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
            <div className='header-items p-3 flex justify-between items-center xl:justify-normal xl:pl-16.2/3 xl:p-7'>
                <Link href={"/"}>
                    <img className='logo xl:test' src='/logo.png' /></Link>

                <div className='menu-list hidden xl:block xl:ml-23'>
                    <ul className='flex items-center'>
                        {menuItems.map((item, index) => <li className='px-12 first:pl-0 last:pr-0' key={index}>
                            <Link href={item.link}><span className='font-medium '>{item.label}</span></Link>
                        </li>)}
                    </ul>
                </div>

                <button className='menu-btn xl:hidden' onClick={openMobileSidebar} data-target="#main-mobile-sidebar" type="button" >
                    <img src='/menu-icon.svg' />
                </button>

            </div>
        </div>

    </>
}

export default Header 