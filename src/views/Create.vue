<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
    <v-btn @click="handleSavingContent" class="red mt-4">Save Content</v-btn>
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
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor,
    Facebook,
    Twitter,
  },

  data() {
    return {
      content: '<h3>Initial Content</h3>',
    }
  },

  methods: {
    handleSavingContent: function() {
      // You have the content to save
      console.log(this.content)
    },
  },
}
</script>
