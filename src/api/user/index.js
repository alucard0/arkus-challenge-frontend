import { Post, Get, Delete, Put } from '../'

export default class User {
  static Login(userData) {
    return Post('/auth', userData)
  }
  static GetAll() {
    return Get('/user')
  }
  static GetSingleUser(email) {
    return Get('/user', email)
  }
  static CreateUser(user) {
    return Post('/user', user)
  }
  static DeleteUser(email) {
    return Delete('/user', email)
  }
  static UpdateUser(user) {
    return Put('/user', user)
  }
}
