<template>
  <div id="app">
      <v-app id="inspire">
        <navbar></navbar>
        <new-item></new-item>
      </v-app>
  </div>
</template>

<script>
import NewItem from '@/components/NewItem.vue'
export default {
  data () {
    return {
      name: 'private'
    }
  },
  components: {
    'new-item': NewItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
