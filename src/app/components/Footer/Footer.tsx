import React from 'react'
import BackgroundSection from '../BackgroundSection'
import './style.scss'
import { Button } from '../Button'

interface IProps { }

const Footer: React.FC<IProps> = () => {

    return <div className='footer-container '>
        <div className='pre-footer'>
            <BackgroundSection src='/footer.jpg' ratio={0.65666666666} style={{
                background: "linear-gradient(180deg, #F2F2F2 29.20%, rgba(206, 236, 245, 0.00) 100%)"
            }}>
                <div className='px-7 pt-41.2/3 '>
                    <p className='text-xl whitespace-pre-wrap '>{`工場・倉庫建設に関するあらゆるお悩みに対応いたします。\n資料請求・お見積りはフォームより、お気軽にお問い合わせください。`}</p>

                </div>


                <div className='flex justify-center mt-35'>
                    <Button text='お問い合わせ'/>
                </div>
            </BackgroundSection>
        </div>
        <div className='footer flex flex-col items-center pb-14'>
            <div className='mx-36 mt-14'>
                <img className='footer-logo ' src='/kakehi_logo_white_rectangle.png' alt='Kakehi footer logo' />
            </div>
            <p className='text-md text-center mt-3'>〒680-1417 鳥取県鳥取市桂見573番地</p>
            <p className='text-md text-center font-base'>TEL 0857-28-4788</p>


            <div className='footer-link mt-8'>
                <a><span className='text-md'>会社概要</span></a>
                <a><span className='text-md'>個人情報保護方針</span></a>
                <a><span className='text-md'>利用規約</span></a>
            </div>


            <p className='text-sm text-center mt-5'>Copyright © Kakehi Builder. All rights reserved.</p>
        </div>
    </div>
}

export default Footer