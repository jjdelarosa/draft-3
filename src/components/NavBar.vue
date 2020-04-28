<template>
  <v-app-bar app color="black" dark clipped-left>
    <v-toolbar-title>
      <v-btn text class="text-none font-weight-light headline" @click="$router.push('/')">
        <span>GroupCoding</span>
        <span class="font-weight-regular">Hub</span>
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="!user" to="/login" text>
      <span class="mr-2">Login</span>
    </v-btn>
    <div v-else>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <span class="mr-2">{{ user.name }}</span>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
          <v-btn class="red mr-2" @click="$router.push('/profile')">
            <span class="mr-2">Profile</span>
          </v-btn>
          <v-btn class="red mr-2" @click="$router.push('/create')">
            <span>Create Code</span>
          </v-btn>
          <v-btn class="red mr-2" @click="$router.push('/messages')">
            <span class="mr-2">Messages</span>
          </v-btn>
          <v-btn class="red mr-2" @click="$router.push('/newsfeed')">
            <span class="mr-2">News Feed</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn block text @click="showDialog()">Add Post</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn block text @click="logOut">Logout</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut()
      this.setUser('')
      this.setIdToken('')
      this.$router.push('/')
    },
    ...mapActions(['setUser', 'setIdToken', 'showDialog']),
  },
}
</script>
