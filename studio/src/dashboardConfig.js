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
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea770a6a438a7ef2027ab47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vkc8w3vd',
                  apiId: 'edac3130-5921-4ecf-8595-fcf9dcad1447'
                },
                {
                  buildHookId: '5ea770a7a72f5b1c62578510',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fznubczw',
                  apiId: '3e939daa-2209-45e6-85fc-2cc6de5554b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameswyse/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fznubczw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
