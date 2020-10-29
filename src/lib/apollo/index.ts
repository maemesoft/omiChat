import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { cache } from "./cache";
import { store } from "../../modules";

export function createApolloClient() {
    // To See the documentation about this function, see the link below
    // https://www.apollographql.com/docs/react/networking/advanced-http-networking/

    // Create httpLink Object that makes HTTP request
    // const httpLink = new HttpLink({
    //     uri: `${env.API_LINK}/graphql`,
    // });

    // Create Auth Header
    // https://www.apollographql.com/docs/react/networking/authentication/
    // const authLink = setContext(async (_, { headers }) => {
    //

    //     // Get UserToken from AsyncStorage
    //     const token = getUserToken;

    //     // Add token to headers
    //     return {
    //         headers: {
    //             ...headers,
    //             Authorization: token ? token : "",
    //         },
    //     };
    // });

    // Concat authLink with httpLink
    // const httpAuthLink = authLink.concat(httpLink)

    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        uri: `http://127.0.0.1:3000/graphql`,
        cache,
        headers: {
            Authorization: store.getState().userInfo.token || "",
        },
    });

    // Create ApolloClient and return it
    // Concat authMiddleware and HttpLink with "from"
    return client;
}
