<template>
    <v-flex xs12 sm12 id="margin">
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
                <div v-if="!show">
                    <div class="headline" v-text="item.title"></div>
                    <div class="grey--text" v-text="item.body"></div>
                    <div>{{item.state | uppercase}}</div>
                      <span class="cursor" @click="showForm()">
                       <font-awesome-icon :icon="icon"/>
                      </span>
                      <span class="cursor" @click="deleteItem(item)">
                       <font-awesome-icon :icon="iconDelete"/>
                      </span>
                </div>
                <v-form v-if="show" ref="form">
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
                  <div>
                    <v-select
                      :items="states"
                      v-model="item.state"
                      label="Select"
                      single-line
                    ></v-select>
                  </div>
                  <v-btn
                    @click="submit(item)"
                  >
                    submit
                  </v-btn>
                </v-form>
                </v-card-title>

            </v-card>
            </v-flex>
        </v-layout>
        </v-container>
    </v-card>
    </v-flex>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faDelete from '@fortawesome/fontawesome-free-solid/faTrash'
import itemService from '@/services/Item'
export default {

  data () {
    return {
      name: 'ModifyItems',
      items: null,
      show: false,
      states: ['public', 'draft']
    }
  },
  methods: {
    showForm () {
      this.show = true
    },
    async submit (item) {
      // Native form submission is not yet supported
      console.log(item)
      try {
        await itemService.patchItem(item)
        this.show = false
        console.log('patch done')
      } catch (err) {
        console.log(err)
      }
    },
    async deleteItem (item) {
      // Native form submission is not yet supported
      console.log(item)
      try {
        await itemService.deleteItem(item)
        console.log('deleted item')
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.items = (await itemService.getItems()).data
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  },
  computed: {
    icon () {
      return faEdit
    },
    iconDelete () {
      return faDelete
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#margin {
  margin: 20px
}
.cursor {
  cursor: pointer
}
</style>
