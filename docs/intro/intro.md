---
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 👋 Welcome!

Welcome to the documentation of `ram-api.js`. This documentation will help you get started with our API wrapper.

--------------------

## Installation

<Tabs
defaultValue="npm"
values= {[
{ label: 'NPM', value: 'npm' },
{ label: 'PNPM', value: 'pnpm' },
{ label: 'YARN', value: 'yarn' },
]
}>

<TabItem value="npm">

```bash
npm install ram-api.js@latest
```

</TabItem>

<TabItem value="pnpm">

```bash
pnpm install ram-api.js@latest
```

</TabItem>

<TabItem value="yarn">

```bash
yarn add ram-api.js@latest
```

</TabItem>

</Tabs>

--------------------

## ➕ Importing ram-api.js

<Tabs
defaultValue="js"
values= {[
{ label: 'JavaScript', value: 'js' },
{ label: 'TypeScript', value: 'ts' },
]
}>

<TabItem value="js">

```js
const ramapi = require('ram-api.js');
```

</TabItem>

<TabItem value="ts">

```ts
import * as ramapi from 'ram-api.js';
```

</TabItem>

</Tabs>