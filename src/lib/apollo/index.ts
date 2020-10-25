import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import env from "react-native-config";
import useUserInfo from "../../hooks/useUserInfo";

export function createApolloClient() {
    // To See the documentation about this function, see the link below
    // https://www.apollographql.com/docs/react/networking/advanced-http-networking/

    // Create httpLink Object that makes HTTP request
    const httpLink = new HttpLink({
        uri: `${env.API_LINK}/graphql`,
    });

    // Create Auth Header
    // https://www.apollographql.com/docs/react/networking/authentication/
    const authLink = setContext(async (_, { headers }) => {
        const { getUserToken } = useUserInfo();

        // Get UserToken from AsyncStorage
        const token = getUserToken;

        // Add token to headers
        return {
            headers: {
                ...headers,
                Authorization: token,
            },
        };
    });

    // Concat authLink with httpLink
    const httpAuthLink = authLink.concat(httpLink);

    // Create ApolloClient and return it
    // Concat authMiddleware and HttpLink with "from"
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpAuthLink,
    });
}
