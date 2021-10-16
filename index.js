require('dotenv/config');

const app = require("express")();
const { ApolloServer } = require("apollo-server-express");
const jwt = require("express-jwt");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers");
const JWT_SECRET = require("./constants");

const auth = jwt({
    algorithms: ['sha1', 'RS256', 'HS256'],
    credentialsRequired: false,
    secret: JWT_SECRET,
});
app.use(auth);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: "/graphql",
    },
    context: ({ req }) => {
        const user = req.headers.user
            ? JSON.parse(req.headers.user)
            : req.user
            ? req.user
            : null;
        return { user };
    },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("The server started on port " + PORT);
});