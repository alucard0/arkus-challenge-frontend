import { Post, Get, Delete, Put } from '../'

export default class Account {

  static GetAll() {
    return Get('/account')
  }
  static GetSingleAccount(id) {
    return Get(`/account/${id}`)
  }
  static GetAssignedAccounts(){
    return Get('/account/assigned_accounts')
  }
  static CreateAccount(account) {
    return Post('/account', account)
  }
  static DeleteAccount(id) {
    return Delete('/account', id)
  }
  static UpdateAccount(account) {
    return Put('/account', account)
  }
}
