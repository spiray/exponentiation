[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![npm](https://img.shields.io/npm/v/exponentiation.svg) ![npm](https://img.shields.io/npm/dt/exponentiation.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/9578b938355b4daa97c5ab63cf68a028)](https://www.codacy.com/app/spiray/exponentiation?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=spiray/exponentiation&amp;utm_campaign=Badge_Grade)

# exponentiation

A Node.js package that assists in easy exponentiation.

## Usage

First, install the package using npm:

```sh
    npm i exponentiation -P
```

Then, require the package and use it like so:

```js
    const exp = require('exponentiation');

    console.log(exp(2, 10)); // 1024
    console.log(exp(1, '0')); // 1
    console.log(exp(null, 3)); // Error: Both arguments must be numbers.
    console.log(exp(1, undefined)); // Error: Both arguments must be numbers.
```

## License

MIT
