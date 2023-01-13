module.exports = {
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin",
        "prettier"
    ],
    "extends": [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier"
    ],
    "rules": {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "prettier/prettier": "error",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": [2, {"ts-ignore": "allow-with-description"}],
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/ban-types": "off",
        "import/order": 2
    },
    "ignorePatterns": [
        ".eslintrc.js"
    ],
};
