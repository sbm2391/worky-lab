<template>
  <div id="app">
      <v-app id="inspire">
       <navbar></navbar>
          <v-layout row>
            <new-item></new-item>
            <modify-items></modify-items>
        </v-layout>
      </v-app>
  </div>
</template>

<script>
import NewItem from '@/components/NewItem.vue'
import ModifyItems from '@/components/ModifyItems.vue'
export default {
  data () {
    return {
      name: 'private'
    }
  },
  components: {
    'new-item': NewItem,
    'modify-items': ModifyItems
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
