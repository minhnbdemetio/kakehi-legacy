import PageTitle from '@/app/components/PageTitle'
import React from 'react'
import './style.scss'
import BackgroundSection from '@/app/components/BackgroundSection'
import SectionTitle from '@/app/components/SectionTitle'

interface IProps { }

const TopPageInformation: React.FC<IProps> = () => {

    return <BackgroundSection ratio={0.236462094} src='/steel-self-background.jpg'>
        <div className='toppage-information-container'>

            <PageTitle title="システム建築とは" subTitle="SYSTEM" />

            <p className='description text-xl font-medium mt-30' >
                システム建築とは、規格化された部材と建築工法を用いた建物であり、在来工法より安く・早く建てることが可能です。規模により部材の寸法や形状、配置などがあらかじめ決められているため、短い設計期間・工事期間で建設できます。</p>


            <div className='featuring mt-15'>
                <div className='featuring-title'>
                    <PageTitle title="システム建築に適した建物" divider />
                </div>

                <ul className='list-feature grid grid-cols-1 gap-25'>
                    <li className='feature-item'>
                        <img alt='Factory' src="/factories/factory-1.png" />
                        <div className='feature-item-description'>
                            <p className='description-label text-center' style={{ background: "#BE95A1" }} >工場</p>
                            <div>
                                <ul >
                                    <li>機械・金属・鉄鋼</li>
                                    <li>自動車</li>
                                    <li>食品</li>
                                    <li>製薬</li>
                                    <li>電気機器</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='feature-item '>
                        <img alt='Factory' src="/factories/warehouse-2.png" />
                        <div className='feature-item-description'>
                            <p className='description-label text-center' >倉庫</p>
                            <div>
                                <ul  >
                                    <li>資材</li>
                                    <li>貯蔵槽</li>
                                    <li>農業</li>
                                    <li>物流</li>
                                    <li>冷凍</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='feature-item '>
                        <img alt='Factory' src="/factories/shop.png" />
                        <div className='feature-item-description'>
                            <p className='description-label text-center' >大型店舗・施設</p>
                            <div>
                                <ul  >
                                    <li>飲食店</li>
                                    <li>スーパーマーケット</li>
                                    <li>ドラッグストア</li>
                                    <li>ホームセンター</li>
                                    <li>体育館・室内練習場</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>




            </div>

            <div>
                <SectionTitle position='right' subtitle={"advantages"} title={`システム建築が\n工場・倉庫に最適 な理由`} />
            </div>
        </div >
    </BackgroundSection>


}

export default TopPageInformation