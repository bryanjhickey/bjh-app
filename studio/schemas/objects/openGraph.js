export default {
  name: "openGraph",
  title: "Open graph",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "This is the page title that Google and most other search engines show in search results.",
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description:
        "The meta description summarizes the page’s content. Search engines often use it for the snippet in search results.",
      validation: (Rule) => Rule.required().min(60).max(140),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Add an image for the social snippet. 1200x630 for optimal clarity across all devices",
        options: {
          hotspot: true
        }
    },
    // {
    //   name: "metaRefreshActive",
    //   title: "Meta Refresh Active",
    //   description:
    //     "A meta refresh tag tells the web browser to redirect the user to a different URL after a set amount of time.",
    //   type: "boolean",
    // },
    // {
    //   name: "metaRefresh",
    //   title: "Meta Refresh",
    //   type: "metaRefresh",
    //   hidden: ({ document }) => document.metaRefreshActive === false,
    // },
  ],
  initialValue: {
    metaRefreshActive: false,
  },
};
