
# Ar Fajar Setiaji's Prettier Config

This is my personal config for Prettier code formatter library.

[![NPM Library](https://img.shields.io/npm/v/@arfajarsetiaji/prettier-config?style=flat-square)](https://www.npmjs.com/package/@arfajarsetiaji/prettier-config)
## Installation and Usage

1. Move into your project directory

2. Install prettier & this prettier config library as development dependencies

```bash
  npm install --save-dev --save-exact prettier @arfajarsetiaji/prettier-config
```

3. Use it in your project
a. If you don't need to override it, reference it in your package.json

```json
{
  ...
  "prettier": "@arfajarsetiaji/prettier-config"
}
```
b. If you need to override it, spread import this config library in your .prettierrc.js file. Export the modifications, e.g modify the print width config:

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

