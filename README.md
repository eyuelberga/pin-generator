# pin-generator

> A simple JavaScript utilty library to generate random pin codes.

## Installation

```sh
$ yarn add pin-generator

# or

$ npm install pin-generator
```

## Usage 

```js

import generatePin from "pin-generator";

generatePin(); // returns a 4-digit pin

```

You can also specify the number of digits you want by calling the `generatePin` method
with an argument 


```js

generatePin(6); // 6-digit pin

```
Also see [CodeSandbox Demo](https://codesandbox.io/s/pin-generator-demo-nz841?file=/src/index.js) for a complete example

## License

MIT © [Eyuel Berga](https://github.com/eyuelberga)

