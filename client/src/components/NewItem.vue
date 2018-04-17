<template>
    <v-flex xs12 sm4 id="margin">
      <v-card>
        <v-toolbar flat dense class="grey">
          <v-toolbar-title class="white--text">Create new item</v-toolbar-title>
        </v-toolbar>
        <v-container fluid grid-list-md>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Title"
              v-model="item.title"
              :counter="50"
              :rules="titleRules"
              required
            ></v-text-field>
            <v-text-field
              label="Description"
              v-model="item.body"
              :counter="150"
              :rules="bodyRules"
              required
            ></v-text-field>
            <v-btn
              @click="submit"
              :disabled="!valid"
            >
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
        </v-container>
      </v-card>
    </v-flex>
</template>

<script>
import itemService from '@/services/Item'
export default {
  data () {
    return {
      items:null,
      valid: false,
      titleRules: [
        v => !!v || 'title is required',
        v => (v && v.length <= 50) || 'title must be less than 10 characters'
      ],
      bodyRules: [
        v => !!v || 'title is required',
        v => (v && v.length <= 150) || 'Description must be less than 10 characters'
      ],
      name: 'newItem',
      item: {
        title: ' ',
        body: ' '
      }
    }
  },
  methods: {
    clearInputs () {
      this.item = {
        title: ' ',
        body: ' '
      }
    },
    async submit () {
      // Native form submission is not yet supported
      if (this.$refs.form.validate()) {
        try {
          await itemService.postItems(this.item)
          this.clearInputs()
          this.items = (await itemService.getItems()).data
          this.$emit('update', this.items)
        } catch (err) {
          console.log(err)
        }
      }
    },
    clear () {
      this.clearInputs()
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
