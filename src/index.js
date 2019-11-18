import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
//import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from 'react-apollo'
const cache = new InMemoryCache()
const link = new HttpLink({
    uri: 'https://petgram-server-marembu-2.marembu.now.sh/graphql',
})
const client = new ApolloClient({
    cache,
    link,
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app')
)

//ReactDOM.render(<App />, document.getElementById('app'))
