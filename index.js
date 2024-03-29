const overridableOptions = {
	$schema: "http://json.schemastore.org/prettierrc",
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	quoteProps: "as-needed",
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
	htmlWhitespaceSensitivity: "css",
	endOfLine: "lf",
	rangeStart: 0,
	rangeEnd: Infinity,
	requirePragma: false,
	insertPragma: false,
	proseWrap: "preserve",
	vueIndentScriptAndStyle: false,
};

const plugins = [
	"@ianvs/prettier-plugin-sort-imports",
	"prettier-plugin-packagejson",
];

const sortImportOptions = {
	importOrder: [
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"<BUILTIN_MODULES>",
		"",
		"^react$",
		"^@angular$",
		"^vue$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@core/(.*)$",
		"",
		"^@server/(.*)$",
		"",
		"^@ui/(.*)$",
		"",
		"^[./]",
		"",
		"^(?!.*[.]css$)[./].*$",
		".css$",
	],
	importOrderParserPlugins: ["typescript", "jsx"],
	importOrderTypeScriptVersion: "5.0.0",
};

module.exports = {
	...overridableOptions,
	plugins: plugins,
	...sortImportOptions,
};
