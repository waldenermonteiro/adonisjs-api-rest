'use strict'
class StorePost {
  get name(){
    return 'Post'
  }
  get inputs(){
    return ['title', 'text']
  }
  rules (postId) {
    postId = postId || 0
    return {
      title: `required|unique:posts,title,id,${postId}`,
      text: 'required'
    }
  }
  get messages () {
    return {
      'title.required': 'Field title is required',
      'title.unique': 'Already have a user with this title, please choose another',
      'text.required': 'Field text is required',
    }
  }
}

module.exports = StorePost
