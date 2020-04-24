<template>
  <v-app class="blue darken-2 text-center fill-height">
    <div>
      <h1>GroupCodingHub</h1>
      <h4>
        A social network a place where you can share code and talk to one another and work together in projects and homework activites. As a community of coders, I feel we will connect them to solution that enable productivity, growth, and
        discovery to your code.
      </h4>
      <v-card class="mx-auto mt-4" shaped max-width="300">
        <v-card-title
          >Are You???
          <v-container>
            <v-list class="mx-auto red">
              <v-list-item-content>
                <v-list-item-title>A Coder </v-list-item-title>
              </v-list-item-content>
            </v-list>
          </v-container>
          <v-container>
            <v-list class="mx-auto green">
              <v-list-item-content>
                <v-list-item-title>A Student </v-list-item-title>
              </v-list-item-content>
            </v-list>
          </v-container>
          <v-container>
            <v-list class="mx-auto purple">
              <v-list-item-content>
                <v-list-item-title>A Developer </v-list-item-title>
              </v-list-item-content>
            </v-list>
          </v-container>
        </v-card-title>
      </v-card>
    </div>
    <Coder />
    <Student />
    <Developer />
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>John De La Rosa</strong>
        <a class="facebook" href="https://www.facebook.com/john.delarosa.902266/" target="_blank"><Facebook /></a>
        <a class="twitter" href="https://twitter.com/thebomb520" target="_blank"><Twitter /></a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Coder from '../components/Coder.vue'
import Student from '../components/Student.vue'
import Developer from '../components/Developer.vue'
import Facebook from 'vue-material-design-icons/Facebook'
import Twitter from 'vue-material-design-icons/Twitter'

export default {
  name: 'Home',
  components: {
    Coder,
    Student,
    Developer,
    Facebook,
    Twitter,
  },
}
</script>
