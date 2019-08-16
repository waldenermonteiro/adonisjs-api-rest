'use strict'
const { validateAll } = use('Validator')
class BaseRepository {
    constructor(Model, Validator) {
        this.Model = Model
        this.Validator = new Validator()
    }
    async list({ request, response }) {
        const items = await this.Model.all()
        return response.ok({
            status: 200,
            data: items
        })
    }
    async getBydId({ request, response, params }) {
        const item = await this.Model.findBy('id', params.id)
        if (this.verifyIfExistItem(item, response) === false) {
            return response.ok({
                status: 200,
                data: item
            })
        }
    }
    async create({ request, response }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(), this.Validator.messages)
        if (this.verifyErrorsInRequest(validation, response) === false) {
            const item = await this.Model.create(data)
            return response.ok({
                status: 200,
                data: item
            })
        }
    }
    async update({ request, response, params }) {
        const data = request.only(this.Validator.inputs)
        const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages)
        const item = await this.Model.findBy('id', params.id)
        if (this.verifyIfExistItem(item, response) === false && this.verifyErrorsInRequest(validation, response) === false) {
            await item.merge(data)
            await item.save()
            return response.ok({
                status: 200,
                data: item
            })
        }
    }
    async remove({ request, response, params }) {
        const item = await this.Model.findBy('id', params.id)
        if (this.verifyIfExistItem(item, response) === false) {
            return await item.delete()
        }
    }
    verifyIfExistItem(item, response) {
        if (!item) {
            return response.badRequest({ status: 400, errors: [{ message: `${this.Validator.name} not found` }] })
        }
        return false
    }
    verifyErrorsInRequest(validation, response) {
        if (validation.fails()) {
            return response.badRequest({
                status: 400,
                errors: validation.messages()
            })
        }
        return false
    }
}
module.exports = BaseRepository
