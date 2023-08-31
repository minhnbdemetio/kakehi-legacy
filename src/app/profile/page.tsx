import React from 'react'

import './style.scss'
import BackgroundWithSlogan from '../components/BackgroundWithSlogan'
import items from './items'
import CardDescription from '../components/CardDescription'

interface IProps { }

const Profile: React.FC<IProps> = () => {

    return <div className='profile pb-22 xl:pb-38.1/3'>
        <BackgroundWithSlogan src='/company-profile-background.png'>
            <h1 className='text-3xl'>会社概要</h1>
        </BackgroundWithSlogan>

        <ul className='grid grid-cols-1 mx-7 gap-3 mt-22 xl:mt-33.1/3 xl:mx-pc-container xl:gap-7'>
            {items.map((item, index) => <li key={index}><CardDescription size='small' background='card-primary' label={item.label} description={item.description} /></li>)}
        </ul>
    </div>
}

export default Profile