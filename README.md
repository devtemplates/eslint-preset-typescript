# eslint-preset-typescript

[![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![javascript style guide][standard-image]][standard-url]

[ci-image]: https://github.com/devtemplates/eslint-preset-typescript/actions/workflows/run_release.yml/badge.svg?branch=main
[ci-url]: https://github.com/devtempaltes/eslint-preset-typescript/actions/workflows/run_release.yml
[npm-image]: https://img.shields.io/npm/v/@devtemplates/eslint-preset-typescript.svg
[npm-url]: https://npmjs.com/package/@devtemplates/eslint-preset-typescript
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

> Opinionated Eslint configuration preset for typescript projects using standard and prettier

With with introduction of the [new eslint configuration format](https://eslint.org/docs/latest/use/configure/configuration-files-new), messy peer dependencies, module resolution, and configuration merging has been replaced with a composable api built to allow more natural composition. The preset presented here wraps an opinionated set of functionality for working in a [typescript](https://www.typescriptlang.org/) project using [standard style](https://standardjs.com/) and the [prettier formatter](https://prettier.io/).

## Usage

The new eslint configuration allows for significantly easier setup.

1. Install eslint (needs to be > 8.0.0): `npm install eslint --save-dev`
2. Install eslint-preset-typescript: `npm install @devtemplates/eslint-preset-typescript`
3. Add an `eslint.config.js` file to the root of your repository with the following contents:

```
import { eslintPresetTypescript } from "@devtemplates/eslint-preset-typescript";
export default eslintPresetTypescript();
```

### API

#### `eslintPresetTypescript(options) ⇒ Linter.FlatConfig[]`

Generate an array preset of eslint config objects.

**options**

| Param   | Type                 | Description                                            | Defaults                                       |
| ------- | -------------------- | ------------------------------------------------------ | ---------------------------------------------- |
| ignores | `string \| string[]` | String globs indicating which files should be ignored. | `["**/*.config.js", "dist/**/*", "docs/**/*"]` |

## License

The MIT License (MIT) Copyright (c) Jarid Margolin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
