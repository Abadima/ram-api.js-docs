---
sidebar_label: Listeners
---

# Listeners

## package-update

This listener listens for package updates. It will send a message to the channel you specified in the config.

### Usage

```js
const ramapi = require('ram-api.js');

const apiEvent = ramapi.Events;

apiEvent.on('package-update', (data) => {
    console.log(data);
});
```