const Ajv = require('ajv')

const BaseValidator = require('moleculer/src/validator')
const {ValidationError} = require('moleculer/src/errors')

class AjvValidator extends BaseValidator {
  constructor () {
    super()
    this.validator = new Ajv()
  }

  compile (schema) {
    const validate = this.validator.compile(schema)
    return (params) => this.validate(params, validate)
  }

  validate (params, validate) {
    const isValid = validate(params)
    if (isValid) return true
    else throw new ValidationError('Parameters validation error!', null, validate.errors)
  }
}

module.exports = AjvValidator