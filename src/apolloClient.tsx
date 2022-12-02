import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import { setContext } from '@apollo/client/link/context';
import { config } from './config';

const httpLink = createUploadLink({
    uri: config.BASE_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('vendorToken');

    if (token) {
        return {
            headers: {
                ...headers,
                authorization: ` ${token}`,
            },
        };
    }
});

const Client = new ApolloClient({
    link: authLink.concat(httpLink as any),
    cache: new InMemoryCache(),
});

export default Client;
