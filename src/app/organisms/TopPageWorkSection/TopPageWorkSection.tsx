

import PageTitle from '@/app/components/PageTitle'
import React from 'react'

import ProjectListCaroursel from '@/app/components/ProjectListCaroursel';

interface IProps { }

const TopPageWorkSection: React.FC<IProps> = () => {


    return <div className='mt-16.2/3'>
        <PageTitle title='施工実績' subTitle='WORK' />

        <div className='mt-24'>
            <ProjectListCaroursel projects={[
                {
                    name: "構造", img: "/project-1.jpg", descriptions: [{ label: '構造', content: "鉄骨造2階建" },
                    { label: '延床面積', content: "2,699.79㎡" }], tag: "食品工場"
                },
                {
                    name: "Project 2", img: "/project-1.jpg", descriptions: [{ label: '構造', content: "鉄骨造2階建" },
                    { label: '延床面積', content: "2,699.79㎡" }], tag: "金属製造工場"
                }, {
                    name: "Project 3", img: "/project-1.jpg", descriptions: [{ label: '構造', content: "鉄骨造2階建" },
                    { label: '延床面積', content: "2,699.79㎡" }], tag: "自動車部品製造工場"
                },
                {
                    name: "Project 4", img: "/project-1.jpg", descriptions: [{ label: '構造', content: "鉄骨造2階建" },
                    { label: '延床面積', content: "2,699.79㎡" }], tag: '自動車部品製造工場'
                },
            ]} />

        </div>

    </div>
}

export default TopPageWorkSection