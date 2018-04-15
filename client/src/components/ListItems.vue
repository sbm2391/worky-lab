<template>
  <div class="hello">
    <h1>Items:</h1>
  <div v-for="item in items" :key="item._id">
    <p>{{item.title}}</p>
    <p>{{item.body}}</p>
  </div>
  </div>
</template>

<script>

import itemService from '@/services/Item'
export default {

  data () {
    return {
      items: null
    }
  },
  async mounted () {
    this.items = (await itemService.getItems()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
