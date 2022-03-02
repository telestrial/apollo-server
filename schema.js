const { gql } = require("apollo-sever");

const typeDefs = gql`
  type: Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    link(slug: String!): Link
    allLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
