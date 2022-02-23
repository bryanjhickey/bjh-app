export default {
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
      default: true,
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    },
    {
      name: "openGraph",
      title: "Open Graph Details",
      type: "openGraph",
      group: 'seo'
    },
  ],
};
