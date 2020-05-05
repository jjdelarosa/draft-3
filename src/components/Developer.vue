<template>
  <v-app>
    <v-img :src="bgImage">
    <h1>A Developer</h1>
    <h4>
      A developer is an individual who is responsible for creating or working on the development of a product or service. Most developers utilize one or more programming languages to develop their product or service. They may work alone or
      on a team, and may develop part of or all a product or service.
    </h4>
    <v-card class="mx-auto mt-4" shaped max-width="300">
      <v-card-title
        >Which Developer are you??
        <v-container>
          <v-list class="mx-auto green">
            <v-list-item-content>
              <v-list-item-title> Deploying a Website</v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto pink">
            <v-list-item-content>
              <v-list-item-title> Deploying a App </v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-container>
        <v-container>
          <v-list class="mx-auto yellow">
            <v-list-item-content>
              <v-list-item-title> Or with a Team </v-list-item-title>
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