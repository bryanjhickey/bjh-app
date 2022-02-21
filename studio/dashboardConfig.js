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
                  buildHookId: '620c5fd0ee742c4d016c1987',
                  title: 'Studio',
                  name: 'eloquent-jennings-36e5c1',
                  apiId: '11736abf-fb41-4114-bec7-9c78db14c686'
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
