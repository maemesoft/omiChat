// ↓ Add to fix this issue ↓
// Module parse failed: Unexpected token. You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
// https://github.com/akveo/react-native-ui-kitten/issues/996

const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {
                dangerouslyAddModulePathsToTranspile: ["@ui-kitten/components"],
            },
        },
        argv
    );
    return config;
};
