module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": 'off',
        "semi": [
            "error",
            "always"
        ]
    }
};
