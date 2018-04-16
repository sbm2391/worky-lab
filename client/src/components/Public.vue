<template>
  <div id="app">
      <v-app id="inspire">
            <navbar></navbar>
           <list-items></list-items>
      </v-app>
  </div>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
export default {
  data () {
    return {
      name: 'public'
    }
  },
  components: {
    'list-items': ListItems
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
