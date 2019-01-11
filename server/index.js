import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import graphqlHTTP from 'express-graphql';

import peopleRouter from './routes/peopleRouter';
import connect from './db/mongo';
import schema from './db/graphql';

const app = express()
const port = process.env.PORT || 8081

app.use(cors())
app.use(bodyParser.json())
app.use('/people', peopleRouter)

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port, async () => {
    console.log(`server running at ${port}`)

    await connect()
    console.log('connected to mongodb')
})