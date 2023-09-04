
import React from 'react'
import './style.scss'
import './responsive.css'

interface IProps {
    thumbnail: string
    tag?: string
    name: string
    structure: string,
    acreage: number

}

const ProjectCard: React.FC<IProps> = ({ thumbnail, name, tag, acreage, structure }) => {

    return <div className='project-card-container pb-12 relative'>
        <img className='project-card-image' src={thumbnail} alt={name} />

        <div className='mx-7 mt-8'>
            <p className='text-lg font-bold pb-4 project-card-name'>{name}</p>

            <ul className='project-card-descriptions mt-7 grid grid-cols-1 gap-7'>
                <li className='project-card-description flex '>
                    <p className='project-card-description-label text-md xl:text-lg'>構造</p>
                    <p className='project-card-description-content text-md pl-7 flex-auto' >{structure}㎡</p>
                </li>
                <li className='project-card-description flex '>
                    <p className='project-card-description-label text-md xl:text-lg'>延床面積</p>
                    <p className='project-card-description-content text-md pl-7 flex-auto' >{acreage}㎡</p>
                </li>
            </ul>
        </div>
        {!!tag && <span className='tag absolute top-0 left-0 text-md px-7 py-2 xl:py-3'>{tag}</span>}
    </div>
}

export default ProjectCard