<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <BlogPost v-for="blog in blogs" :key="blog.id" :blog="blog" @deleted="getBlogs" @edited="getBlogs" />
        </v-col>
      </v-row>
      <Dialog @added="getBlogs" />
    </v-container>
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
import BlogPost from '@/components/BlogPost.vue'
import Dialog from '@/components/Dialog.vue'
export default {
  name: 'Home',
  components: {
    BlogPost,
    Dialog,
    Facebook,
    Twitter,
  },
  data() {
    return {
      blogs: [],
    }
  },
  mounted() {
    this.getBlogs()
  },
  methods: {
    async getBlogs() {
      const response = await this.$axios('api/posts/')
      this.blogs = response.data
    },
  },
}
</script>
