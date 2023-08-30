import React from 'react'
import './style.scss'
import './responsive.css'

interface IProps {
    img: string
    name: string
    descriptions: { label: string, content: string }[]

}

const ProjectCard: React.FC<IProps> = ({ img, name, descriptions }) => {

    return <div className='project-card-container pb-12'>
        <img className='project-card-image' src={img} alt={name} />

        <div className='mx-7 mt-8'>
            <p className='text-lg font-bold pb-4 project-card-name'>{name}</p>

            <ul className='project-card-descriptions mt-7 grid grid-cols-1 gap-7'>
                {descriptions.map((description) => <li key={description.label} className='project-card-description flex '>
                    <p className='project-card-description-label text-md xl:text-lg'>{description.label}</p>
                    <p className='project-card-description-content text-md pl-7 flex-auto' >{description.content}</p>
                </li>)}
            </ul>
        </div>
    </div>
}

export default ProjectCard