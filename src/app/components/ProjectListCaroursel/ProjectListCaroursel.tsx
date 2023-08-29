'use client'
import React, { useCallback, useRef } from 'react'
import Slider from 'react-slick'
import ProjectCard from '../ProjectCard/ProjectCard';
import './style.scss'
import './responsive.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const xlSettings = { ...settings, slidesToShow: 3 }
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
        <div>
            <button className='project-list-carousel-naviate-btn left ' onClick={prev}><img alt='Nagivate Prev' src='/icons/navigate-previous.png' /></button>
        </div>
        <div className=' project-list-carousel mx-23 block xl:hidden'>
            <Slider ref={ref as any} {...settings}   >
                {projects.map((project) => <div key={project.name} className='px-1 '>
                    <ProjectCard name={project.name}
                        descriptions={project.descriptions} img={project.img} />
                </div>)}
            </Slider>
        </div>
        <div className=' project-list-carousel mx-23 hidden xl:block'>
            <Slider ref={ref as any} {...xlSettings}   >
                {projects.map((project) => <div key={project.name} className='px-1 xl:px-0 xl:pr-16'>
                    <ProjectCard name={project.name}
                        descriptions={project.descriptions} img={project.img} />
                </div>)}
            </Slider>
        </div>

        <button className='project-list-carousel-naviate-btn right' onClick={next}><img alt='Nagivate next' src='/icons/navigate-next.png' /></button>
    </div>
}

export default ProjectListCaroursel