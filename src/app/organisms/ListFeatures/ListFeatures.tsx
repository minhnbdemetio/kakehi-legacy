import React from 'react'
import PageTitle from '@/app/components/PageTitle'
import './styles.scss'
import items from './items'
import './responsive.css'

interface IProps { }

const ListFeatures: React.FC<IProps> = () => {
    return <div className='featuring mt-15 mx-7 pb-16.2/3 xl:pb-21 xl:mx-auto xl:w-fit xl:px-25 '>
        <div className='featuring-title'>
            <PageTitle title="システム建築に適した建物" divider />
        </div>

        <ul className='list-feature flex flex-col xl:flex-row xl:justify-center xl:gap-16.2/3 xl:mt-8'>
            {items.map((item) => {

                return <li key={item.img} className='feature-item pb-24 xl:pb-0 '>
                    <div className='feature-img'>
                        <img alt='Factory' src={item.img} />
                    </div>
                    <div className='feature-item-description  mt-16.2/3 xl:mt-14'>
                        <p className='description-label text-center' style={{ background: "#BE95A1" }} >{item.label}</p>
                        <div>
                            <ul >
                                {item.description.map((desc) => <li key={desc}>{desc}</li>)}
                            </ul>
                        </div>
                    </div>
                </li>
            })}
        </ul>

    </div>
}

export default ListFeatures