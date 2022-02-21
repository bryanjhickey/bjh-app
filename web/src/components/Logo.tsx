import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Logo() {
  return (
    <div>
      <span className="sr-only">Bryan J. Hickey</span>
      <StaticImage
        className=""
        src="../assets/images/logo/logo_full_colour.svg"
        alt="Bryan J. Hickey Logo"
        placeholder="blurred"
        width={220}
      />
    </div>
  );
}
