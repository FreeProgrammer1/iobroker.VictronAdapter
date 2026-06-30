import js from "@eslint/js";
import iobroker from "@iobroker/eslint-config";

export default [
    js.configs.recommended,
    ...iobroker,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                module: "readonly",
                require: "readonly",
                __dirname: "readonly",
                Buffer: "readonly",
                console: "readonly",
                customElements: "readonly",
                HTMLElement: "readonly",
                window: "readonly"
            }
        },
        rules: {
            "no-console": "off"
        }
    }
];
