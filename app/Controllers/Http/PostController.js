'use strict'
const Post = use('App/Models/Post')
const StorePost = use('App/Validators/StorePost')
const BaseController = use('App/Controllers/Http/BaseController')
class PostController extends BaseController {
  constructor() {
    super(Post, StorePost)
  }
}
module.exports = PostController
