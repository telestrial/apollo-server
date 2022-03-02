const randomString = require("randomstring");

const resolvers = {
  Query: {
    async link(root, { slug }, { models }) {
      return models.Link.findOne({ where: { slug } });
    },
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },
  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      if (!slug) slug = randomString.generate(8);

      return models.Link.create({
        url,
        slug
      });
    }
  }
};

module.exports = resolvers;
