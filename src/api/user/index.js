import { Post, Get, Delete } from '../'

export default class User {
  static Login(userData) {
    return Post('/auth', userData)
  }
  static GetAll() {
    return Get('/user')
  }
  static CreateUser(user) {
    return Post('/user', user)
  }
  static DeleteUser(email) {
    return Delete('/user',email)
  }
}
