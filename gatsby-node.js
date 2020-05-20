exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      graphqlZero {
        posts(options: { paginate: { limit: 5 } }) {
          data {
            id
            title
            user {
              name
            }
          }
        }
      }
    }
  `)

  const {
    data: {
      graphqlZero: {
        posts: { data: posts },
      },
    },
  } = result

  posts.forEach(post => {
    createPage({
      path: `/post/${post.id}/`,
      component: require.resolve("./src/templates/post.js"),
      context: { post },
    })
  })

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-posts.js"),
    context: { posts },
  })
}
