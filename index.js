module.exports = {
  $schema: "http://json.schemastore.org/prettierrc",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: false,
  proseWrap: "preserve",
  semi: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  arrowParens: "always",
  trailingComma: "es5",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  insertPragma: false,
  requirePragma: false,
  rangeStart: 0,
  rangeEnd: Infinity,
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: false,
  importOrderCaseInsensitive: false,
  importOrderParserPlugins: ["typescript", "jsx"],
};
