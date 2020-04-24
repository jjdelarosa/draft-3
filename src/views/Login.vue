<template>
  <div id="firebaseui-auth-container" class="mt-8">
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

export default {
  name: 'Login',
  components: {
    Facebook,
    Twitter,
  },
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async () => {
          const idToken = await this.$firebase.auth().currentUser.getIdToken()
          this.$store.dispatch('setIdToken', idToken)
          this.$axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`
          const { data } = await this.$axios('login')
          this.$store.dispatch('setUser', data)
          this.$router.push('/')
          return false
        },
      },
      signInOptions: [this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID, this.$firebase.auth.EmailAuthProvider.PROVIDER_ID],
    }
    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
  },
}
</script>
