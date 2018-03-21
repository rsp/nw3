Node Workshop - Lesson 3
=
`=> github.com/rsp/nw3`
-

Lesson 3 of the
Node.js Workshop by Rafał Pocztarski at inFullMobile.

* Prev: https://github.com/rsp/nw2
* Next: (not yet)

About us
=
[<img src="https://infullmobile.com/wp-content/themes/ifm_simple/img/svg/logo_dark.svg" width="500">](https://infullmobile.com/)

**inFullMobile** is a digital product design and development studio based in Warsaw, Poland.

Doing mobile, web, IoT and hardware projects from the idea to a final product.

https://infullmobile.com/

About me
=
[<img src="https://github.com/rsp.png" height="80">](https://pocztarski.com/)

**Rafał Pocztarski** is a Senior Node.js Developer and Team Leader at inFullMobile.

Programming since 1986, commercially since 1996.

Programming in Node since watching the first Node.js presentation by Ryan Dahl in 2009.

Enjoys writing about Node.js on Stack Overflow, holding a rare Gold Node.js Badge.

https://pocztarski.com/

Previous workshop
=
See the documentation added after the last workshop:

* https://github.com/rsp/nw2

Certification
=

The official certification program under development:

Node.js Certified Developer (NCD) Program
-

More info on:

* https://foundation.nodejs.org/resources/certification

Public info about the program scope, recommended books, etc.:

* https://github.com/nodejs-certified-developer

Disclaimer
-
As a Node.js Foundation Certification Committee Member
I cannot say anything more than what is available
publically under the links above so please stop asking.

Language
=
Standard
-
* https://www.ecma-international.org/publications/standards/Ecma-262.htm

TC39
-

* https://github.com/tc39

Proposals:

* https://github.com/tc39/proposals

MDN Docs
-
* https://developer.mozilla.org/Web/JavaScript

Compatibility
=

Can I use
-
* https://caniuse.com/

ECMAScript compatibility tables
-

* https://kangax.github.io/compat-table/
  * https://kangax.github.io/compat-table/es5/
  * https://kangax.github.io/compat-table/es6/
  * https://kangax.github.io/compat-table/es2016plus/
  * https://kangax.github.io/compat-table/esnext/
  * https://kangax.github.io/compat-table/esintl/
  * https://kangax.github.io/compat-table/non-standard/

* https://node.green/

Node docs
-

Current Node API docs:

* https://nodejs.org/api/

Random Node advantages
=
HTTP/2 in the core since July, 2017

Say hello to HTTP/2 for Node.js Core

* https://medium.com/the-node-js-collection/say-hello-to-http-2-for-node-js-core-261ba493846e

Functions
=
Destructuring example:

```js
(({ a: x, b: { c: [y, z] } }) => ({ x, y, z }))({ a: 1, b: { c: [2, 3] } });
```

d1.js:

```js
const f = ({
  a: x,
  b: {
    c: [y, z]
  }
}) => ({ x, y, z });

const r = f({ a: 1, b: { c: [2, 3] } });

console.log(r);
```

Babel
=
Install:

```sh
$ npm install -g babel-cli
```

Use:

```sh
$ babel file.js
```

Explain:

* https://babeljs.io/env/
* https://www.npmjs.com/package/babel-preset-env
* https://www.npmjs.com/package/babel-preset-es2015

TypeScript
=

Explain how to install.

```sh
$ npm install -g typescript
```

d2.ts:

```js
const f = ({
  a: x,
  b: {
    c: [y, z]
  }
}: {
  a: string,
  b: {
    c: number[]
  }
}) => ({ x, y, z });

const r = f({ a: '1', b: { c: [2, 3] } });

console.log(r);
```

Compile:

```sh
$ tsc file
```

Run:

```sh
$ node file
```

GitHub
-
* https://github.com/

Travis
-
* https://travis-ci.org/

npm
-
* https://www.npmjs.com/

ESLint
-
* https://www.npmjs.com/package/eslint

Tests
-
Popular modules:

* https://www.npmjs.com/package/tap
* https://www.npmjs.com/package/tape
* https://www.npmjs.com/package/jasmine
* https://www.npmjs.com/package/mocha
* https://www.npmjs.com/package/chai

More:

* https://www.npmjs.com/browse/keyword/test


[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
