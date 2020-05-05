<template>
  <v-app>    
    <v-img :src="bgImage">
    <h1>A Coder</h1>
    <h4>
      A social network a place where you can share code and talk to one another and work together in projects and homework activites. As a community of coders, I feel we will connect them to solution that enable productivity, growth, and
      discovery to your code.
    </h4>
    <v-card class="mx-auto mt-4" shaped max-width="300">
      <v-card-title
        >What Coder are you??
        <v-container>
          <v-list class="mx-auto blue">
            <v-list-item-content>
              <v-list-item-title> C # </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto orange">
            <v-list-item-content>
              <v-list-item-title> HTML </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto grey">
            <v-list-item-content>
              <v-list-item-title> SQL </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto">
            <v-list-item-content>
              <v-list-item-title> ...And More </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
      </v-card-title>
    </v-card>
    </v-img>
      </v-app>
</template>

<script>
import bgImage from '../components/bgImage1.jpg'
export default {
  name: 'Coder',
  data() {
    return {
      bgImage
    }
  }
}
</script>
