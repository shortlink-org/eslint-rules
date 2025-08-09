"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _eslintpluginjs = /*#__PURE__*/ _interop_require_default(require("@stylistic/eslint-plugin-js"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var js = require('@eslint/js');
var tsParser = require('@typescript-eslint/parser');
var eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
var react = require('eslint-plugin-react');
var shortlink = require('eslint-plugin-shortlink');
var globals = require('globals');
var config = [
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: [
            '**/*.{js,jsx,mjs,cjs,ts,tsx}'
        ],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: _object_spread({}, globals.serviceworker, globals.browser)
        },
        plugins: {
            react: react,
            '@stylistic/js': _eslintpluginjs.default,
            shortlink: shortlink
        },
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'no-fallthrough': 'off',
            semi: [
                'off',
                'never'
            ],
            'global-require': 'off',
            'no-console': [
                'warn',
                {
                    allow: [
                        'info',
                        'warn',
                        'error'
                    ]
                }
            ],
            'no-shadow': 'off',
            camelcase: 'off',
            'react/jsx-pascal-case': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'import/no-default-export': 'off'
        },
        ignores: [
            '.storybook/'
        ]
    }
];
module.exports = config;

