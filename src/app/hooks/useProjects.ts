
import {gql, useQuery, QueryResult} from '@apollo/client'
import { useMemo } from 'react';


const GET_PROJECTS = gql(`query {
  projects {
    data {
      attributes {
        name
        tag
        thumbnail {
          data {
            id
            attributes {
              name
              url
            }
          }
        }
        structure
        acreage
      }
    }
  }
}`);



const getStrapiImageUrl = (uri: string) => {

    return process.env.NEXT_PUBLIC_CMS_ENDPOINT + uri
}

const formatProjects = (data: QueryResult<{
    projects: {
        data: {
            attributes: {
                name?: string, 
                tag?: string, 
                thumbnail?: {
                    data?: {
                        attributes?: {
                            name?: string
                            url?: string
                        }
                    }
                }
                acreage?: number
                structure?: string
            }
        }[]
    }
}>) => {


    if (!data.data?.projects) return [] 

    return data.data?.projects.data.map((project) => {
        return {
            name: project.attributes.name || '',
            tag: project.attributes.tag || '',
            structure: project.attributes.structure || '',
            thumbnail: getStrapiImageUrl(project.attributes.thumbnail?.data?.attributes?.url || ''),
            acreage: project.attributes.acreage || 0
        }
    })
}

const useProjects = () => {
    const data = useQuery(GET_PROJECTS)

    return useMemo(() => formatProjects(data), [data])
}

export default useProjects