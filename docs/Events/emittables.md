---
sidebar_label: Emittables
---

# Emit Events

## stop-update-check

Stops the update checks.

### Usage

```js
const ramapi = require('ram-api.js');
const apiEvent = ramapi.Events;

apiEvent.emit('stop-update-check');
```

## start-update-check

Starts the update checks, again.

### Usage

```js
const ramapi = require('ram-api.js');
const apiEvent = ramapi.Events;

apiEvent.emit('start-update-check');
```