<template>
  <v-app >
    <v-content>
		  <Toolbar v-if='Object.values(user).length > 0' />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Toolbar },
  computed: {
    ...mapState(["user"])
  }
}
</script>

<style>
  *{
    font-family: 'Raleway'
  }
</style>