export default {
  name: 'brandLogo',
  title: 'Brand logo',
  type: 'object',
  fields: [
     {
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
     },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      options: {
        isHighlighted: true,
      },
      },
  ],
}
