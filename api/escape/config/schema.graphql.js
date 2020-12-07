module.exports = {
    query: `
      escapesCount(where: JSON): Int!
    `,
    resolver: {
      Query: {
        escapesCount: {
          description: 'Return the count of escapes',
          resolverOf: 'application::escape.escape.count',
          resolver: async (obj, options, ctx) => {
            return await strapi.api.escape.services.escape.count(options.where || {});
          },
        },
      },
    },
  };