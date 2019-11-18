import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql?",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer your-personal-access-token`
            },
        });
    }
});

render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, document.getElementById('root')
);
