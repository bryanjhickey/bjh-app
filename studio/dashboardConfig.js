export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      layout: {
        width: 'full',
        height: 'auto'
      }
    },
{
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Our Sites',
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620ae03b66adee00ac7d2fb1',
                  title: 'Website',
                  name: 'bjhdev',
                  apiId: '9d70837b-a0e3-4f17-a28f-9d4a6c12c455'
                },
                {
                  buildHookId: '6213220e04ce5411c507f743',
                  title: 'Studio',
                  name: 'bjhdev-cms',
                  apiId: 'fde84312-dbc2-4fe7-842d-914dc3e21443'
                }
              ]
            }
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryanjhickey/bjh-app',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://www.bjh.dev/', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
        height: 'small'
      }
    }
  ]
}
