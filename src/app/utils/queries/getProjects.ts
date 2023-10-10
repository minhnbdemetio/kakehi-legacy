import { ApolloQueryResult, gql, QueryResult } from "@apollo/client";
import { getClient } from "@/app/lib/apolloClient";
import { getStrapiImageUrl } from "../common";

type ProjectData = {
  projects: {
    data: {
      id: string;
      attributes: {
        name?: string;
        tag?: string;
        thumbnail?: {
          data?: {
            attributes?: {
              name?: string;
              url?: string;
            };
          };
        };
        images: {
          data: { attributes: { name: string; url: string } }[];
        };
        acreage?: number;
        structure?: string;
      };
    }[];
  };
};

export const GET_PROJECTS = gql(`query {
  projects {
    data {
      id
      attributes {
        name
        tag
        thumbnail {
          data {
            attributes {
              name
              url
            }
          }
        }
        images {
          data {
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

const formatProjects = (data: ApolloQueryResult<ProjectData>) => {
  if (!data.data?.projects?.data) return [];

  return data.data?.projects.data.map((project) => {
    const images = project?.attributes?.images?.data || [];

    const firstImage = images[0];

    return {
      id: project.id,
      name: project.attributes.name || "",
      tag: project.attributes.tag || "",
      structure: project.attributes.structure || "",
      thumbnail: getStrapiImageUrl(firstImage?.attributes.url),
      images: images.map((image) => getStrapiImageUrl(image?.attributes?.url)),
      acreage: project.attributes.acreage || 0,
    };
  });
};

const getProjects = async () => {
  const client = getClient();
  const data = await client.query<ProjectData>({ query: GET_PROJECTS });

  return formatProjects(data);
};

export default getProjects;
