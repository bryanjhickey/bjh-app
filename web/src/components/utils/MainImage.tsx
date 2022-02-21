/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

type mainImage = {
  url: string;
  height: number;
  width: number;
  altText: string;
  focalPointX: number;
  focalPointY: number;
  // eslint-disable-next-line react/require-default-props
  format?: `AUTO` | `JPG` | `PNG` | `WEBP` | `AVIF`;
};

export default function MainImage({
  url,
  height,
  width,
  altText,
  focalPointX,
  focalPointY,
  format,
}: mainImage) {
  return (
    <img
      src={`${url}?h=${height}&w=${width}&fit=crop&crop=focalpoint&${
        format || `auto`
      }=format&fp-x=${focalPointX}&fp-y=${focalPointY}`}
      alt={altText}
    />
  );
}
