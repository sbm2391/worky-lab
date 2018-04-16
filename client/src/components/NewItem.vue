<template>
 <div id="items">
  <v-app id="inspire">
    <v-layout>
      <v-flex xs12 sm4>
        <v-card>
          <v-toolbar flat dense class="grey">
            <v-toolbar-title class="white--text">Create new item</v-toolbar-title>
          </v-toolbar>
          <v-container fluid grid-list-md>
            <v-form>
              <v-text-field
                label="Title"
                v-model="item.title"
                :counter="50"
                required
              ></v-text-field>
              <v-text-field
                label="Description"
                v-model="item.body"
                :counter="150"
                required
              ></v-text-field>
              <v-btn
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn @click="clear">clear</v-btn>
          </v-form>
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
      name: 'newItem',
      item: {
        title: ' ',
        body: ' '
      }
    }
  },
  methods: {
    async submit () {
      // Native form submission is not yet supported
      try {
        await itemService.postItems(this.item)
        this.item = {
          title: ' ',
          body: ' '
        }
      } catch (err) {
        console.log(err)
      }
    },
    clear () {
      this.item = {
        title: ' ',
        body: ' '
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#items{
  margin: 20px;
}
</style>
