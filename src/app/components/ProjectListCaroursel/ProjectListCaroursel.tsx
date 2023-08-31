'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Slider from 'react-slick'
import ProjectCard from '../ProjectCard/ProjectCard';
import './style.scss'
import './responsive.css'
import tailWindConfig from '../../../../tailwind.config'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@/app/hooks/UseMediaQuery';

interface IProps {
    projects: { name: string, img: string, descriptions: { label: string, content: string }[] }[]
}

const ProjectListCaroursel: React.FC<IProps> = ({ projects }) => {
    const ref = useRef<{ slickNext: () => void, slickPrev: () => void } | null>(null)

    const [slideToShows, setSlideToShows] = useState(1);


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



    const isExtraLargeScreen = useMediaQuery("xl")

    const settings = useMemo(() => {
        const defaultSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }


        if (isExtraLargeScreen) {
            defaultSettings.slidesToShow = 3
        }

        return defaultSettings
    }, [isExtraLargeScreen])


    return <div className='project-list-carousel-container'>
        <div>
            <button className='project-list-carousel-naviate-btn left ' onClick={prev}><img alt='Nagivate Prev' src='/icons/navigate-previous.png' /></button>
        </div>
        <div className=' project-list-carousel mx-23'>
            <Slider arrows={false} ref={ref as any} {...settings}   >
                {projects.map((project) => <div key={project.name} className='px-1 xl:px-0'>
                    <ProjectCard name={project.name}
                        descriptions={project.descriptions} img={project.img} />
                </div>)}
            </Slider>
        </div>


        <button className='project-list-carousel-naviate-btn right' onClick={next}><img alt='Nagivate next' src='/icons/navigate-next.png' /></button>
    </div>
}

export default ProjectListCaroursel