/* eslint max-lines: 0 */

import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tabbify from 'eslint-config-tabbify'
import tseslint from 'typescript-eslint'

const config = tseslint.config(
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	tseslint.configs.strictTypeChecked,
	tabbify,

	{
		languageOptions: {
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},

		files: [
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.tsx',
		],

		ignores: ['eslint.config.mjs'],

		plugins: {
			'@typescript-eslint': typescriptEslint,
			'@stylistic': stylistic,
		},

		settings: {
			'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx', '.mts']},
			'import/resolver': {
				typescript: {alwaysTryTypes: true},
				node: {
					paths: ['src'],
					extensions: [
						'.js',
						'.jsx',
						'.cjs',
						'.mjs',
						'.ts',
						'.tsx',
						'.cts',
						'.mts',
					],
				},
			},
		},

		rules: {
			/* SUPPORTED STYLISTIC RULES */
			'@stylistic/member-delimiter-style': [
				'error',
				{
					singleline: {
						delimiter: 'comma',
						requireLast: false,
					},
					multiline: {
						delimiter: 'comma',
						requireLast: true,
					},
				},
			],

			'@stylistic/type-annotation-spacing': ['error'],

			'brace-style': ['off'],
			'@stylistic/brace-style': [
				'error',
				'stroustrup',
			],

			'comma-dangle': 'off',
			'@stylistic/comma-dangle': [
				'error',
				'always-multiline',
			],

			'comma-spacing': ['off'],
			'@stylistic/comma-spacing': ['error'],

			'func-call-spacing': ['off'],
			'@stylistic/func-call-spacing': ['error'],

			'keyword-spacing': ['off'],
			'@stylistic/keyword-spacing': ['error'],

			'lines-between-class-members': ['off'],
			'@stylistic/lines-between-class-members': ['error'],

			'no-extra-semi': ['off'],
			'@stylistic/no-extra-semi': ['error'],

			'object-curly-spacing': ['off'],
			'@stylistic/object-curly-spacing': [
				'error',
				'never',
			],

			'padding-line-between-statements': ['off'],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					prev: '*',
					next: 'export',
					blankLine: 'always',
				},
				{
					prev: 'export',
					next: 'export',
					blankLine: 'any',
				},
			],

			'quotes': ['off'],
			'@stylistic/quotes': [
				'error',
				'single',
			],

			'semi': ['off'],
			'@stylistic/semi': [
				'error',
				'never',
				{beforeStatementContinuationChars: 'never'},
			],

			'space-before-blocks': ['off'],
			'@stylistic/space-before-blocks': ['error'],

			'space-before-function-paren': ['off'],
			'@stylistic/space-before-function-paren': ['error'],

			'space-infix-ops': ['off'],
			'@stylistic/space-infix-ops': ['error'],

			/* OTHER SUPPORTED RULES */
			'@typescript-eslint/adjacent-overload-signatures': ['error'],

			// NOTE:
			// Prefer the more verbose Array<x> over x[].
			// This reads cleaner and more consistently.
			// Square bracket types thus implicitly indicate tuples.
			'@typescript-eslint/array-type': [
				'error',
				{default: 'generic'},
			],

			'@typescript-eslint/await-thenable': ['error'],
			'@typescript-eslint/ban-ts-comment': ['error'],
			'@typescript-eslint/ban-tslint-comment': ['error'],
			'@typescript-eslint/class-literal-property-style': ['error'],

			// NOTE:
			// Keep types on the left hand side.
			// This can be more verbose, but its clearer.
			// Variable : Type = Declaration
			'@typescript-eslint/consistent-generic-constructors': [
				'error',
				'type-annotation',
			],

			'@typescript-eslint/consistent-indexed-object-style': ['error'],

			// NOTE:
			// Disallows all type assertions. Just don't do it.
			'@typescript-eslint/consistent-type-assertions': [
				'error',
				{assertionStyle: 'never'},
			],

			// NOTE:
			// Prefer interfaces to types, they are more extensible.
			'@typescript-eslint/consistent-type-definitions': [
				'error',
				'interface',
			],

			'@typescript-eslint/consistent-type-exports': ['error'],
			'@typescript-eslint/consistent-type-imports': ['error'],

			// NOTE:
			// Implicit types, accessibility, etc are still OK.
			'@typescript-eslint/explicit-function-return-type': ['off'],
			'@typescript-eslint/explicit-member-accessibility': ['off'],
			'@typescript-eslint/explicit-module-boundary-types': ['off'],

			// NOTE:
			// Ordering stuff is fine in configuration like imports,
			// 	but this becomes a nuisance in objects and classes.
			'@typescript-eslint/member-ordering': ['off'],

			'@typescript-eslint/method-signature-style': ['error'],

			// NOTE:
			// Some libraries use underscores
			// It's not uncommon to see something like thing._id
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
					leadingUnderscore: 'allowSingleOrDouble',
					trailingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],

			'@typescript-eslint/no-base-to-string': ['error'],
			'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
			'@typescript-eslint/no-confusing-void-expression': ['error'],
			'@typescript-eslint/no-duplicate-enum-values': ['error'],
			'@typescript-eslint/no-dynamic-delete': ['error'],

			// NOTE:
			// There are times where extending an interface can be useful.
			// Interface merging in global namespaces are an example.
			'@typescript-eslint/no-empty-interface': [
				'error',
				{allowSingleExtends: true},
			],

			'@typescript-eslint/no-explicit-any': ['error'],
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-extraneous-class': ['error'],
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-for-in-array': ['error'],
			'@typescript-eslint/no-inferrable-types': ['error'],
			'@typescript-eslint/no-invalid-void-type': ['error'],
			'@typescript-eslint/no-meaningless-void-operator': ['error'],
			'@typescript-eslint/no-misused-new': ['error'],
			'@typescript-eslint/no-misused-promises': ['error'],
			'@typescript-eslint/no-namespace': ['error'],
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['error'],
			'@typescript-eslint/no-redundant-type-constituents': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-restricted-types': ['error'],
			'@typescript-eslint/no-this-alias': ['error'],

			// NOTE:
			// Type aliases can be useful and are pretty core to TS.
			'@typescript-eslint/no-type-alias': ['off'],

			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
			'@typescript-eslint/no-unnecessary-condition': ['error'],
			'@typescript-eslint/no-unnecessary-qualifier': ['error'],
			'@typescript-eslint/no-unnecessary-type-arguments': ['error'],
			'@typescript-eslint/no-unnecessary-type-assertion': ['error'],
			'@typescript-eslint/no-unnecessary-type-constraint': ['error'],
			'@typescript-eslint/no-unsafe-argument': ['error'],
			'@typescript-eslint/no-unsafe-assignment': ['error'],
			'@typescript-eslint/no-unsafe-call': ['error'],
			'@typescript-eslint/no-unsafe-member-access': ['error'],
			'@typescript-eslint/no-unsafe-return': ['error'],
			'@typescript-eslint/no-useless-empty-export': ['error'],
			'@typescript-eslint/no-var-requires': ['error'],
			'@typescript-eslint/non-nullable-type-assertion-style': ['error'],
			'@typescript-eslint/parameter-properties': ['error'],
			'@typescript-eslint/prefer-as-const': ['error'],
			'@typescript-eslint/prefer-enum-initializers': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/prefer-function-type': ['error'],
			'@typescript-eslint/prefer-includes': ['error'],
			'@typescript-eslint/prefer-literal-enum-member': ['error'],
			'@typescript-eslint/prefer-namespace-keyword': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['error'],
			'@typescript-eslint/prefer-optional-chain': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],

			// NOTE:
			// This was reporting errors I didn't like,
			// 	regardless of what its purpose is trying to do.
			'@typescript-eslint/prefer-readonly-parameter-types': ['off'],

			'@typescript-eslint/prefer-reduce-type-parameter': ['error'],
			'@typescript-eslint/prefer-regexp-exec': ['error'],
			'@typescript-eslint/prefer-return-this-type': ['error'],
			'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
			'@typescript-eslint/prefer-ts-expect-error': ['error'],
			'@typescript-eslint/promise-function-async': ['error'],
			'@typescript-eslint/require-array-sort-compare': ['error'],
			'@typescript-eslint/restrict-plus-operands': ['error'],
			'@typescript-eslint/restrict-template-expressions': ['error'],

			// NOTE:
			// Ordering stuff is fine in configuration like imports,
			// 	but this becomes a nuisance in objects and classes.
			'@typescript-eslint/sort-type-union-intersection-members': ['off'],

			'@typescript-eslint/strict-boolean-expressions': ['error'],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],
			'@typescript-eslint/triple-slash-reference': ['error'],

			// NOTE: This seems like a dangerous setting.
			'@typescript-eslint/typedef': ['off'],

			'@typescript-eslint/unbound-method': ['error'],
			'@typescript-eslint/unified-signatures': ['error'],

			/* EXTENSION RULES */

			'default-param-last': ['off'],
			'@typescript-eslint/default-param-last': ['error'],

			'dot-notation': ['off'],
			'@typescript-eslint/dot-notation': ['error'],

			// NOTE:
			// This one is still super buggy, which is so sad!
			// "indent": ["off"],
			// "@typescript-eslint/indent": ["off"],

			'init-declarations': ['off'],
			'@typescript-eslint/init-declarations': ['off'],

			'no-array-constructor': ['off'],
			'@typescript-eslint/no-array-constructor': ['error'],

			'no-dupe-class-members': ['off'],
			'@typescript-eslint/no-dupe-class-members': ['error'],

			'no-empty-function': ['off'],
			'@typescript-eslint/no-empty-function': ['error'],

			'no-extra-parens': ['off'],
			'@typescript-eslint/no-extra-parens': ['off'],

			'no-implied-eval': ['off'],
			'@typescript-eslint/no-implied-eval': ['error'],

			'no-invalid-this': ['off'],
			'@typescript-eslint/no-invalid-this': ['error'],

			'no-loop-func': ['off'],
			'@typescript-eslint/no-loop-func': ['error'],

			'no-loss-of-precision': ['off'],
			'@typescript-eslint/no-loss-of-precision': ['error'],

			'no-magic-numbers': ['off'],
			'@typescript-eslint/no-magic-numbers': ['off'],

			'no-redeclare': ['off'],
			'@typescript-eslint/no-redeclare': ['error'],

			'no-restricted-imports': ['off'],
			'@typescript-eslint/no-restricted-imports': ['off'],

			'no-shadow': ['off'],
			'@typescript-eslint/no-shadow': ['off'],

			/* TODO: Seems deprecated???? */
			// 'no-throw-literal': ['off'],
			// '@typescript-eslint/no-throw-literal': ['error'],

			'no-unused-expressions': ['off'],
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{allowShortCircuit: true, allowTernary: true},
			],

			'no-unused-vars': ['off'],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{args: 'none', ignoreRestSiblings: true},
			],

			'no-use-before-define': ['off'],
			'@typescript-eslint/no-use-before-define': ['error'],

			'no-useless-constructor': ['off'],
			'@typescript-eslint/no-useless-constructor': ['error'],

			'require-await': ['off'],
			'@typescript-eslint/require-await': ['off'],

			// NOTE:
			// This isn't in ESLint's base settings.
			// We do expect to always have await in async functions.
			'no-return-await': ['off'],
			'@typescript-eslint/return-await': [
				'error',
				'always',
			],
		},
	},

	{
		files: ['**/eslint.config.*'],
		extends: [tseslint.configs.disableTypeChecked],
	},
)

export default config
