<template>
  <v-app>
    <v-img :src="bgImage">
    <h1>A Student</h1>
    <h4>
      A person who is willing to learn how to code and use different languages. This person will come here and ask questions. When he/she has a question about their homework or projects. This will help the studnet more in their coding
      skills as they learn with other students and grow with thier coding skills.
    </h4>
    <v-card class="mx-auto mt-4" shaped max-width="300">
      <v-card-title
        >Which Student are you??
        <v-container>
          <v-list class="mx-auto light-green accent-3">
            <v-list-item-content>
              <v-list-item-title> Learning how to build a Website</v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto teal accent-3">
            <v-list-item-content>
              <v-list-item-title> An Intern </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto cyan accent-4">
            <v-list-item-content>
              <v-list-item-title> Getting your degree</v-list-item-title>
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
