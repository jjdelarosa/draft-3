<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end mt-8" height="300px" :src="user.photoURL || defaultPicture">
        <v-card-title>{{ user.displayName }}</v-card-title>
      </v-img>
      <v-card-subtitle>{{ user.email }}</v-card-subtitle>
    </v-card>
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>John De La Rosa</strong>
        <a class="facebook" href="https://www.facebook.com/john.delarosa.902266/" target="_blank"><Facebook /></a>
        <a class="twitter" href="https://twitter.com/thebomb520" target="_blank"><Twitter /></a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import Facebook from 'vue-material-design-icons/Facebook'
import Twitter from 'vue-material-design-icons/Twitter'
import defaultPicture from '../components/user.png'

export default {
  name: 'Profile',
  components: {
    Facebook,
    Twitter,
  },
  data() {
    return {
      defaultPicture,
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
}
</script>
