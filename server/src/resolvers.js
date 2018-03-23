const channels = [/*{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}*/];

import { Channel } from './connectors';
let nextId = 3;
export const resolvers = {
  Query: {
    channels: (_, args) => {
      return Channel.findAll({where: args});
    },
  },
  Mutation: {
    addChannel: (_, args) => {
    //  const newChannel = { id: nextId++, name: args.name };
     return Channel.create(args);
    },
  },
};