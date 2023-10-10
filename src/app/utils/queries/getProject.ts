import { getClient } from "@/app/lib/apolloClient";
import { ApolloQueryResult, gql } from "@apollo/client";
import { getStrapiImageUrl } from "../common";

type ProjectData = {
  project: {
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
        location?: string;
        completed_at: Date;
      };
    };
  };
};

export const GET_PROJECT = (id: string) =>
  gql(`
query Project($id: ID!) {
        project(id: $id) {
          data {
            id
            attributes {
                name
                tag
                images {
                    data {
                        attributes {
                            name
                            url
                        }
                    }
                }
                acreage
                structure
                location
                completed_at
            }
          }
        }
      }
`);

const formatProjects = (project: ApolloQueryResult<ProjectData>) => {
  if (!project.data?.project?.data) return undefined;

  const data = project.data.project.data;

  const images = data.attributes.images.data || [];

  return {
    id: data.id,
    name: data.attributes.name || "",
    tag: data.attributes.tag || "",
    structure: data.attributes.structure || "",
    images: images.map((image) => getStrapiImageUrl(image?.attributes?.url)),
    acreage: data.attributes.acreage || 0,
    location: data.attributes.location || "",
    completed_at: data.attributes.completed_at || undefined,
  };
};
const getProject = async (id: string) => {
  const client = getClient();
  const data = await client.query<ProjectData>({
    query: GET_PROJECT(id),
    variables: { id },
  });

  return formatProjects(data);
};

export default getProject;
