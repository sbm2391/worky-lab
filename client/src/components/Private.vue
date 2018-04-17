<template>
  <div id="app">
      <v-app id="inspire">
       <navbar></navbar>
          <v-layout row>
            <new-item v-on:update="updateItems($event)"></new-item>
            <v-flex xs12 sm12 id="margin">
              <v-card>
                  <v-toolbar flat dense class="grey">
                  <v-toolbar-title class="white--text">Items</v-toolbar-title>
                  </v-toolbar>
                  <v-container fluid grid-list-md>
                    <v-layout row wrap>
                    <modify-item
                    v-for="(item, index) in items"
                    :item="item"
                    :index="index"
                    :key="item.id"
                    v-on:remove="items.splice(index, 1)"
                    ></modify-item>
                    </v-layout>
                  </v-container>
              </v-card>
            </v-flex>
        </v-layout>
      </v-app>
  </div>
</template>

<script>
import NewItem from '@/components/NewItem.vue'
import ModifyItem from '@/components/ModifyItem.vue'
import itemService from '@/services/Item'
export default {
  data () {
    return {
      items: null,
      name: 'private'
    }
  },
  async mounted () {
    this.items = (await itemService.getItems()).data
  },
  components: {
    'new-item': NewItem,
    'modify-item': ModifyItem
  },
   methods: {
     updateItems(newItems){
       this.items = newItems
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#margin {
  margin: 20px
}
</style>
