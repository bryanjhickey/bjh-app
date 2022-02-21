export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '620c60b72ccced58c02d2342',
                  title: 'Website',
                  name: 'objective-euclid-307383',
                  apiId: '42d1c234-900f-4484-aeda-1ba43bcc1da0'
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
            value: 'https://github.com/bryanjhickey/gatsby-ts-sanity-starter/',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://objective-euclid-307383.netlify.app/', category: 'apps' }
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
      layout: { height: 'auto' },
      options: {title: 'Project Users' }
    }
  ]
}
