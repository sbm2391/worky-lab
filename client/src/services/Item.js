import Api from '@/services/Api'

export default {
  getItems () {
    return Api().get('item')
  },
  getItemsByState () {
    return Api().get('item/public')
  },
  postItems (item) {
    return Api().post('item', item)
  },

  patchItem (item) {
    return Api().patch('item/' + item._id, item)
  },
  deleteItem (item) {
    return Api().delete('item/' + item._id, item)
  }
}
