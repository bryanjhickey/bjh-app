export default {
  name: "metaRefresh",
  title: "Meta refresh",
  type: "object",
  fields: [
    {
      name: "metaRefreshTimer",
      title: "metaRefreshTimer",
      description: "Set a timer in seconds for when redirect will occur",
      type: "number",
    },
    {
      name: "metaRefreshURL",
      title: "URL Redirect",
      description: "What URL does this page redirect to after timer",
      type: "reference",
      to: { type: "page" },
    },
  ],
};
