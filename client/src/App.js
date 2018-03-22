import React, { Component } from 'react';
import './App.css';
import ChannelsListWithData from './components/ChannelsListWithData';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './schema';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const networkInterface = createNetworkInterface({ 
  uri: 'http://192.168.2.37:4000/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

class App extends Component {

  render() {
    
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <Button variant="raised" color="secondary" >
        Primary2
      </Button>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
