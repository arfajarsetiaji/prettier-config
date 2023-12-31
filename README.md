# Ar Fajar Setiaji's Prettier Config

This is my personal config for Prettier code formatter library.

[![Workflow Status](https://github.com/arfajarsetiaji/prettier-config/actions/workflows/publish.yml/badge.svg)](https://github.com/arfajarsetiaji/prettier-config/blob/main/.github/workflows/publish.yml)
[![GitHub version](https://badge.fury.io/gh/arfajarsetiaji%2Fprettier-config.svg)](https://badge.fury.io/gh/arfajarsetiaji%2Fprettier-config)
[![npm version](https://badge.fury.io/js/@arfajarsetiaji%2Fprettier-config.svg)](https://badge.fury.io/js/@arfajarsetiaji%2Fprettier-config)

## Installation and Usage

1. Move into your project directory.

2. Install prettier, prettier-plugin-sort-imports, prettier prettier-plugin-packagejson & this prettier config library as development dependencies.

```bash
  npm install --save-dev prettier @ianvs/prettier-plugin-sort-imports prettier prettier-plugin-packagejson @arfajarsetiaji/prettier-config
```

3. Use it in your project.

- If you don't need to override it, just reference it in your package.json.

```json
{
  ...
  "prettier": "@arfajarsetiaji/prettier-config"
}
```

- If you need to override it, spread import this config library in your .prettierrc.js file & export the modifications, e.g modify the print width config:

```js
module.exports = {
	...require("@arfajarsetiaji/prettier-config"),
	printWidth: 120,
};
```

## Authors

[@arfajarsetiaji](https://www.github.com/arfajarsetiaji)

## License

[MIT](https://github.com/arfajarsetiaji/prettier-config/blob/main/LICENSE)
