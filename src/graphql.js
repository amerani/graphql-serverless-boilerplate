const { ApolloServer } = require('apollo-server-lambda');
const resolvers = require('./resolvers');
const schema = require('./schema');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: true
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});