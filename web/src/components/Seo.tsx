import * as React from 'react';
import { Helmet } from 'react-helmet';

interface OpenGraphTagTypes {
  title: string;
  description: string;
  robots: string;
  url: string;
  refreshTimer: string;
  refreshUrl: string;
  imageUrl: string;
  metaType: string;
  focalPointX: string;
  focalPointY: string;
}

export default function Seo({
  title,
  description,
  robots,
  url,
  refreshTimer,
  refreshUrl,
  imageUrl,
  focalPointX,
  focalPointY,
  metaType,
}: OpenGraphTagTypes) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet={`UTF-8`} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="”robots”" content={robots} />
      {refreshTimer && (
        <meta
          httpEquiv="refresh"
          content={`${refreshTimer};url=${refreshUrl}`}
        />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${imageUrl}?h=${1200}&w=${630}&fit=crop&crop=focalpoint&fp-x=${focalPointX}&fp-y=${focalPointY}`}
      />
      {metaType && <meta property="og:type" content="article" />}
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
}
