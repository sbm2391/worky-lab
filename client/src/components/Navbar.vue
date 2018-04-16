<template>
    <v-toolbar dark color="red lighten-1">
        <v-toolbar-title class="white--text">Worky</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat @click="navigateTo({name: 'Public'})">Public</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
            <v-btn flat @click="navigateTo({name: 'Private'})">Private</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
methods:{
    navigateTo(route){
        this.$router.push(route)
    }
},
  data () {
    return {
      name: 'navbar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
