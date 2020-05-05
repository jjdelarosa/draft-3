<template>
  <div>
    <template>
      <v-card class="mx-auto mt-8" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img :src="user.picture || defaultPicture"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Web Developer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </template>
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
