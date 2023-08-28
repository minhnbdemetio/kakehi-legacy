import PageTitle from '@/app/components/PageTitle'
import React from 'react'
import './style.scss'
import BackgroundSection from '@/app/components/BackgroundSection'
import SectionTitle from '@/app/components/SectionTitle'
import ListFeatures from '../ListFeatures'
import AspectsOfCompany from '../AspectsOfCompany'
import TopPageWorkSection from '../TopPageWorkSection'

interface IProps { }

const TopPageInformation: React.FC<IProps> = () => {

    return <BackgroundSection ratio={0.236462094} src='/steel-self-background.jpg'>
        <div className='toppage-information-container'>

            <PageTitle title="システム建築とは" subTitle="SYSTEM" />

            <p className='description text-xl font-medium mt-30 xl:mt-14' >
                システム建築とは、規格化された部材と建築工法を用いた建物であり、在来工法より安く・早く建てることが可能です。規模により部材の寸法や形状、配置などがあらかじめ決められているため、短い設計期間・工事期間で建設できます。</p>



            <ListFeatures />

            <AspectsOfCompany />
        </div >

    </BackgroundSection>


}

export default TopPageInformation