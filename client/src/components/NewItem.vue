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
            <v-form v-model="valid">
              <v-text-field
                label="Title"
                v-model="title"
                :counter="50"
                required
              ></v-text-field>
              <v-text-field
                label="Description"
                v-model="body"
                :counter="150"
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
    </v-layout>
  </v-app>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'newItem',
      title: '',
      body: ''
    }
  }
  // methods: {
    // submit () {
    //   if (this.$refs.form.validate()) {
    //     // Native form submission is not yet supported
    //     axios.post('/api/submit', {
    //       name: this.name,
    //       email: this.email,
    //       select: this.select,
    //       checkbox: this.checkbox
    //     })
    //   }
    // },
  //   clear () {
  //     this.$refs.form.reset()
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#items{
  margin: 20px;
}
</style>
