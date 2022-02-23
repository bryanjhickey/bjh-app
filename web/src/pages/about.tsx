import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function About({ data }) {
  const page = data.page;
  return (
    <Layout>
      <Seo
        title={page.openGraph.title}
        description={page.openGraph.description}
        robots={page.openGraph.robot}
        url={page.openGraph.url}
        refreshTimer={page.openGraph.refreshTimer}
        refreshUrl={page.openGraph.refreshUrl}
        imageUrl={page.openGraph.image.asset.url}
        focalPointX={page.openGraph.image.hotspot.x}
        focalPointY={page.openGraph.image.hotspot.y}
        metaType={page.openGraph.metaType}
      />
      <h1 className="text-3xl text-gray-800">{page.title}</h1>
    </Layout>
  );
}

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(title: { eq: "About" }) {
      title
      openGraph {
        title
        description
        image {
          asset {
            url
          }
          hotspot {
            x
            y
          }
        }
      }
    }
  }
`;
