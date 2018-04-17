<template>
<div>
  <div v-if="items.length < 1">
    <h2 class="message">You don't have public items</h2>
  </div>
  <div v-if="items.length > 0" id="items">
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
                        <div class="grey--text" v-text="item.body"></div>
                        <div>{{item.state | uppercase}}</div>
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
</div>
</template>
<script>

import itemService from '@/services/Item'
export default {

  data () {
    return {
      name: 'listItems',
      items: []
    }
  },
  async mounted () {
    this.items = (await itemService.getItemsByState()).data
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#items {
  margin: 20px auto;
  width: 100vw;
}
.message {
  width: 100vw;
  text-align: center;
  margin: 20px;
}
</style>
