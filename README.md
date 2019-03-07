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
    console.log(exp(null)); // NaN
    console.log(exp(undefined)); // NaN
    console.log(exp(0, 0)); // 1
```

## License

MIT