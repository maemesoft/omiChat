import React from "react";

// Import Redux
import { Provider } from "react-redux";
import { store } from "./src/modules";

// Import Apollo for GraphQL
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./src/lib/apollo";

// Import eva-design related things
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

// Import Screens
import Routes from "./src/Routes";

const App = () => {
    // Initialize ApolloClient Instance
    const client = createApolloClient();

    return (
        <>
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Routes />
                    </ApplicationProvider>
                </ApolloProvider>
            </Provider>
        </>
    );
};

export default App;
//export default React.memo(App);
