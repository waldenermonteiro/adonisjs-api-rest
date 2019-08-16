'use strict'
const User = use('App/Models/User')
const StoreUser = use('App/Validators/storeUser')
const BaseController = use('App/Controllers/Http/BaseController')
const UserRepository = use('App/Repositories/UserRepository')

class UserController extends BaseController {
    constructor() {
        super(User, StoreUser)
        this.UserRepository = new UserRepository(User, StoreUser)
    }
    async login({auth, request, response, params }) {
        return await this.UserRepository.login({ auth, request, response, params })
    }
    async auth({ auth, request, response, params }) {
        const user = await User.find(params.id)
        const token = await auth.generate(user, true)
        return token
    }
}

module.exports = UserController
