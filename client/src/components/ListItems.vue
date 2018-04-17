<template>
<div id="items">
  <v-app id="inspire">
    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-toolbar flat dense class="grey">
            <v-toolbar-title class="white--text">Items</v-toolbar-title>
          </v-toolbar>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                xs12 sm3
                v-for="item in items"
                :key="item._id"
                v-if="item.state === 'public'"
              >
                <v-card>
                  <v-card-media
                    src="https://vuetifyjs.com/static/doc-images/cards/house.jpg"
                    height="200px"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-title>
                    <div>
                      <div class="headline" v-text="item.title"></div>
                      <span class="grey--text" v-text="item.body"></span>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>
<script>

import itemService from '@/services/Item'
export default {

  data () {
    return {
      name: 'listItems',
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
#items {
  margin: 20px;
}
</style>
