import BackgroundSection from "../BackgroundSection";
import { Button } from "../Button";
import "./responsive.css";
import "./style.scss";
import React from "react";

interface IProps { }

const Footer: React.FC<IProps> = () => {

    return <div className='footer-container '>
        <div className='pre-footer'>
            <BackgroundSection className='footer-background' src='/footer.jpg' height={600} style={{
                background: "linear-gradient(180deg, #F2F2F2 29.20%, rgba(206, 236, 245, 0.00) 100%)"
            }}>
                <div className='px-7 pt-41.2/3 '>

                    <p className='text-xl whitespace-pre-wrap xl:text-center xl:w-full greeting'>{`工場・倉庫建設に関するあらゆるお悩みに対応いたします。\n資料請求・お見積りはフォームより、お気軽にお問い合わせください。`}</p>

                </div>


                <div className='flex justify-center mt-35'>
                    <Button>お問い合わせ</Button>
                </div>
            </BackgroundSection>
        </div>
        <div className='footer flex flex-col items-center pb-14 xl:pb-12'>
            <div className='mx-36 mt-14'>
                <img className='footer-logo ' src='/kakehi_logo_white_rectangle.png' alt='Kakehi footer logo' />
            </div>
            <p className='text-md text-center mt-3 xl:mt-11 xl:text-[15px]'>〒680-1417 鳥取県鳥取市桂見573番地</p>
            <p className='text-md text-center font-base xl:text-[15px]'>TEL 0857-28-4788</p>


            <div className='footer-link mt-8 xl:mt-10'>
                <a><span className='text-md xl:text-[15px] xl:px-[22px]'>会社概要</span></a>
                <a><span className='text-md xl:text-[15px] xl:px-[22px]'>個人情報保護方針</span></a>
                <a><span className='text-md xl:text-[15px] xl:px-[22px]'>利用規約</span></a>
            </div>


            <p className='text-sm text-center mt-5 xl:mt-11 xl:text-[15px]'>Copyright © Kakehi Builder. All rights reserved.</p>
        </div>
    </div>
}

export default Footer;
