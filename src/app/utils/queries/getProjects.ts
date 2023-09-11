import { gql, QueryResult } from "@apollo/client";
import { getClient } from "@/app/lib/apolloClient";

type ProjectData = QueryResult<{
  projects: {
    data: {
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
        acreage?: number;
        structure?: string;
      };
    }[];
  };
}>;

export const GET_PROJECTS = gql(`query {
  projects {
    data {
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
        structure
        acreage
      }
    }
  }
}`);

const getStrapiImageUrl = (uri: string) => {
  return process.env.NEXT_PUBLIC_CMS_ENDPOINT + uri;
};

const formatProjects = (data: ProjectData) => {
  if (!data.data?.projects) return [];

  return data.data?.projects.data.map((project) => {
    return {
      name: project.attributes.name || "",
      tag: project.attributes.tag || "",
      structure: project.attributes.structure || "",
      thumbnail: getStrapiImageUrl(
        project.attributes.thumbnail?.data?.attributes?.url || ""
      ),
      acreage: project.attributes.acreage || 0,
    };
  });
};

const getProjects = async () => {
  const client = getClient();
  const { data } = await client.query({ query: GET_PROJECTS });

  return formatProjects(data);
};

export default getProjects;
