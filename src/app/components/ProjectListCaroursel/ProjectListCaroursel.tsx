'use client'
import React, { useCallback, useRef } from 'react'
import Slider from 'react-slick'
import ProjectCard from '../ProjectCard/ProjectCard';
import './style.scss'

interface IProps {
    projects: { name: string, img: string, descriptions: { label: string, content: string }[] }[]
}
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const ProjectListCaroursel: React.FC<IProps> = ({ projects }) => {
    const ref = useRef<{ slickNext: () => void, slickPrev: () => void } | null>(null)


    const next = useCallback(() => {
        if (ref.current) {
            console.debug(ref.current)
            ref.current.slickNext()
        }
    }, [])

    const prev = useCallback(() => {
        if (ref.current) {
            ref.current.slickPrev()
        }
    }, [])


    return <div className='project-list-carousel-container'>
        <button className='project-list-carousel-naviate-btn left' onClick={prev}><img alt='Nagivate Prev' src='/icons/navigate-previous.png' /></button>
        <div className='mx-23'>
            <Slider ref={ref as any} {...settings}   >
                {projects.map((project) => <div key={project.name} className='px-1'>
                    <ProjectCard name={project.name}
                        descriptions={project.descriptions} img={project.img} />
                </div>)}
            </Slider>
        </div>

        <button className='project-list-carousel-naviate-btn right' onClick={next}><img alt='Nagivate next' src='/icons/navigate-next.png' /></button>
    </div>
}

export default ProjectListCaroursel