'use strict'
const BaseRepository = use('App/Repositories/BaseRepository')
class PostRepository extends BaseRepository {
    constructor(Model, Validator) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = Validator
    }
}
module.exports = PostRepository
