const { gql } = require('apollo-server-lambda');

module.exports = gql`
type Query {
  hello: String
}
`;