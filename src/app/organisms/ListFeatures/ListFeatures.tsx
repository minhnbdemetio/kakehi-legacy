import React from 'react'
import PageTitle from '@/app/components/PageTitle'
import './styles.scss'
import items from './items'

interface IProps { }

const ListFeatures: React.FC<IProps> = () => {
    return <div className='featuring mt-15'>
        <div className='featuring-title'>
            <PageTitle title="システム建築に適した建物" divider />
        </div>

        <ul className='list-feature grid grid-cols-1 gap-25'>
            {items.map((item) => {

                return <li key={item.img} className='feature-item'>
                    <img alt='Factory' src={item.img} />
                    <div className='feature-item-description'>
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