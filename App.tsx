import React from "react";

// Import eva-design related things
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

// Import Screens
import Routes from "./src/Routes";

// Import Apollo for GraphQL
// import { ApolloProvider } from "@apollo/client";
// import { createApolloClient } from "./src/lib/apollo/apollo";

// Import Redux
// import { createStore } from "redux";
// import rootReducer from "./src/modules";
// import { Provider } from "react-redux";

const App = () => {
    // Initialize ApolloClient Instance
    // const client = createApolloClient();

    // redux를 위한 스토어 입니다.
    // const store = createStore(rootReducer);

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <Routes />
            </ApplicationProvider>
        </>
    );
};

export default App;
//export default React.memo(App);
