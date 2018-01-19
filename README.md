# Moleculer JSON Schema Validator

Validate moleculer action params via JSON Schema.

## Current Version (v1.0.0)

- support [json schema draft-7](http://json-schema.org/specification-links.html#draft-7)
- support [moleculer ^0.11.x](https://github.com/ice-services/moleculer)
- using [ajv ^6.x.x](https://github.com/epoberezkin/ajv)

## Install

`npm install --save moleculer-json-schema-validator`

## Usage

```js
// moleculer.config.js

const Validator = require('moleculer-json-schema-validator')

module.exports = {
  ...
  validator: new Validator()
}
```

```
// service.js

module.exports = {
  actions: {
    hello: {
      params: {
        properties: {
          "name": {type: "string"}
        },
        required: ["name"]
      },
      handler (ctx) {
        const {name} = ctx.params
        return `Hello ${name}`
      }
    }
  }
}
```

## License

MIT