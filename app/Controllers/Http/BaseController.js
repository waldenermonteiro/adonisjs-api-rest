'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
class BaseController {
    constructor(Model, Validator) {
        this.Model = Model
        this.BaseRepository = new BaseRepository(Model, Validator)
    }
    async list({ request, response }) {
        return await this.BaseRepository.list({ response })
    }
    async getBydId({ request, response, params }) {
        return await this.BaseRepository.getBydId({ response, params })
    }
    async create({ request, response }) {
        return await this.BaseRepository.create({ request, response })
    }
    async update({ request, response, params, }) {
        return await this.BaseRepository.update({ request, response, params })
    }
    async remove({ request, response, params }) {
        return await this.BaseRepository.remove({ request, response, params })
    }
}
module.exports = BaseController
