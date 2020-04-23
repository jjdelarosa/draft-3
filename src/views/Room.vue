<template>
  <div>
    <v-navigation-drawer app permanent clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{ room.name }}</v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="room in rooms" :key="room.id" :to="`/room/${room.id}`">
          <v-list-item-content>
            <v-list-item-title>{{ room.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <div v-for="message in messages" :key="message.id">
        <p class="overline">{{ message.author }} on {{ message.createdAt.toDate().toLocaleString() }}</p>
        <p>{{ message.message }}</p>
      </div>
    </v-container>
    <v-footer absolute>
      <v-text-field v-model="newMessage" color="purple" label="New Message" @change="add" />
      <v-btn rounded class="purple" @click="add">Send</v-btn>
    </v-footer>
  </div>
</template>

<script>
import { db } from '../plugins/firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'Room',
  data() {
    return {
      newMessage: '',
      room: {},
      rooms: [],
      messages: [],
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  watch: {
    '$route.params.id': async function() {
      await this.$bind('room', db.collection('rooms').doc(this.$route.params.id))
      await this.$bind(
        'messages',
        db
          .collection('messages')
          .where('roomId', '==', this.$route.params.id)
          .orderBy('createdAt'),
      )
    },
  },
  mounted() {
    this.bind()
  },
  methods: {
    async add() {
      if (this.newMessage != '') {
        await db.collection('messages').add({
          roomId: this.$route.params.id,
          author: this.user.displayName,
          message: this.newMessage,
          createdAt: new Date(),
        })
        this.newMessage = ''
      }
    },
    async bind() {
      await this.$bind('room', db.collection('rooms').doc(this.$route.params.id))
      await this.$bind('rooms', db.collection('rooms').orderBy('createdAt'))
      await this.$bind(
        'messages',
        db
          .collection('messages')
          .where('roomId', '==', this.$route.params.id)
          .orderBy('createdAt'),
      )
    },
  },
}
</script>
