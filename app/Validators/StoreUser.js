'use strict'
class StoreUser {
  get name(){
    return 'User'
  }
  get inputs(){
    return ['username', 'email', 'password']
  }
  get inputsLogin(){
    return ['email', 'password']
  }
  rules (userId) {
    userId = userId || 0
    return {
      username: `required|unique:users,username,id,${userId}`,
      email: `required|unique:users,email,id,${userId}`,
      password: 'required'
    }
  }
  get rulesLogin () {
    return {
      email: `required`,
      password: 'required'
    }
  }
  get messages () {
    return {
      'username.required': 'Field username is required',
      'username.unique': 'Already have a user with this name, please choose another',
      'email.required': 'Field email is required',
      'email.unique': 'Already have a user with this email, please choose another',
      'password.required': 'Field password is required',
    }
  }
}

module.exports = StoreUser
