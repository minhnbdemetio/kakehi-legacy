'use client'

import React, { useState } from 'react'

import './style.scss'
interface IProps { }

const FloatingButtons: React.FC<IProps> = () => {

    const [open, setOpen] = useState(false)

    const boxClass = 'floating-buttons-box ' + (open ? "show" : "")

    console.debug(open, boxClass)

    return <div className={boxClass} >
        <button onClick={() => setOpen((o) => !o)} className='collapse-floating-buttons'>
            <img src="/icons/chevron-circle-icon.png" alt="Chevron up circle icon" />
        </button>
        <div className='floating-buttons grid grid-cols-6 w-full'>
            <a className='email-button w-full flex flex-col items-center justify-center'>
                <img src="/icons/email-icon.png " className='btn-icon inline' alt='Email icon' />
                <p>お問い合わせ</p>
            </a>
            <a className='document-button w-full flex flex-col items-center justify-center'>
                <img src="/icons/document-icon.png" className='btn-icon inline' alt='Document icon' />
                <p>資料請求</p>
            </a>
        </div>
    </div>
}

export default FloatingButtons