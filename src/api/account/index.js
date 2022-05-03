import { Post, Get, Delete, Put } from '../'

export default class Account {

  static GetAll() {
    return Get('/account')
  }
  static GetSingleAccount(id) {
    return Get('/account', id)
  }
  static GetAssignedAccounts(){
    return Get('/account/assigned_accounts')
  }
  static CreateAccount(account) {
    return Post('/account', account)
  }
  static DeleteUser(id) {
    return Delete('/account', id)
  }
  static UpdateUser(account) {
    return Put('/account', account)
  }
}
