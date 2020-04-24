<template>
  <div>
    <v-card class="mx-auto mt-4" max-width="300">
      <v-card-title>
        <v-container>
          <v-row>
            <v-text-field v-model="newRoom" label="New Room" @change="add" />
            <v-btn color="blue" @click="add">Add</v-btn>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-subheader>Rooms Available</v-subheader>
          <v-list-item v-for="room in rooms" :key="room.id" :to="`room/${room.id}`">
            <v-list-item-content>
              <v-list-item-title v-text="room.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
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
import { db } from '../plugins/firebase'

export default {
  name: 'Home',
  components: {
    Facebook,
    Twitter,
  },
  data() {
    return {
      newRoom: '',
      rooms: [],
    }
  },
  mounted() {
    this.bind()
  },
  methods: {
    async add() {
      if (this.newRoom != '') {
        await db.collection('rooms').add({
          name: this.newRoom,
          createdAt: new Date(),
        })
        this.newRoom = ''
      }
    },
    async bind() {
      await this.$bind('rooms', db.collection('rooms').orderBy('createdAt'))
    },
  },
}
</script>
