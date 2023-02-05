/* eslint-disable */
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
        'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'react/prop-types': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
        'comma-dangle': ["error", "never"],
        'indent': ["error", 4],
        'react/jsx-indent': ["error", 4],
        'padded-blocks': ["error", "always"],
        'react/jsx-closing-tag-location': "off",
        'react/jsx-filename-extension': [1, { "extensions": [".tsx", ".jsx"] }],
        'react/jsx-wrap-multilines': ["error", {
            'return': 'parens'
        }]
	},
};