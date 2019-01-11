import { schemaComposer } from 'graphql-compose';
import People from './schema/peopleSchema';

schemaComposer.Query.addFields({
    peopleById: People.getResolver('findById'),
    peopleByIds: People.getResolver('findByIds'),
    peopleOne: People.getResolver('findOne'),
    peopleMany: People.getResolver('findMany'),
    peopleCount: People.getResolver('count')
});

schemaComposer.Mutation.addFields({
    peopleCreateOne: People.getResolver('createOne'),
    // peopleCreateMany: People.getResolver('createMany'),
    peopleUpdateById: People.getResolver('updateById'),
    peopleUpdateOne: People.getResolver('updateOne'),
    peopleUpdateMany: People.getResolver('updateMany'),
    peopleRemoveById: People.getResolver('removeById'),
    peopleRemoveOne: People.getResolver('removeOne'),
    peopleRemoveMany: People.getResolver('removeMany'),
});


export default schemaComposer.buildSchema();