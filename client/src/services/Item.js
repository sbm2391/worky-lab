import Api from '@/services/Api'

export default {
  getItems () {
    return Api().get('item')
  },

  postItems (item) {
    return Api().post('item', item)
  }
}
