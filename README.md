# Remove string proposal

TC39 proposal to implement the `String.prototype.remove`.

![Proposal Stage 0](https://img.shields.io/badge/Proposal-Stage--0-blue)
![Version](https://img.shields.io/npm/v/@hotequil/proposal-remove-string.svg)
![Downloads](https://img.shields.io/npm/dt/@hotequil/proposal-remove-string.svg)
![License](https://img.shields.io/npm/l/@hotequil/proposal-remove-string)

![npm](https://nodei.co/npm/@hotequil/proposal-remove-string.png?downloads=true&downloadRank=true&stars=true)

## Reason

The motivation behind this [proposal](https://es.discourse.group/t/implement-the-string-prototype-remove) is to
simplify the text replacement within JavaScript. Currently, to remove some text in a `string`, you need to use
the `replace` or `replaceAll` methods passing an empty `string` as a second parameter. This
is an ugly way. So this proposal doesn't change the memory value and removes the second parameter.

## How it works

It receives one **string** or **RegExp** that returns a new **string**.

## Installation

Install the package using [npm](https://www.npmjs.com) or another package manager you want.

```shell
npm install @hotequil/proposal-remove-string
```

## Usage

Import the polyfill in the main, index or app file of your project.

```TypeScript
import "@hotequil/proposal-remove-string";
```

## Typical cases

Follow the examples in TypeScript below.

```TypeScript
// Imports omitted…

"bitcoin-mainnet".remove("-mainnet")
// "bitcoin"

"bitcoin-mainnet".remove(/-mainnet/)
// "bitcoin"

"bitcoin mainnet mainnet".remove("mainnet", { trim: true })
// "bitcoin"

"bitcoin mainnet mainnet".remove(/mainnet/, { trim: true })
// "bitcoin"
```

## Proposer

- Author: [@hotequil](https://github.com/hotequil);
- Champion(s): _no one at the moment_.

_This repository there is no other third dependency, see the [package.json](package.json)._
