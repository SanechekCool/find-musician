<template>
  	<v-container>
		  <v-avatar
			  size="30"
		  >
			  <img :src="user.photoUrl" >
		  </v-avatar>		  
		  <h1>{{ user.username }}</h1>
		  <v-subheader>{{ user.email }}</v-subheader>
	</v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
	name: 'Home',
	data: () => ({
		
	}),
	computed:{
		...mapState(["user"])
	},
	created(){
		if (localStorage.getItem("token") != undefined) {
			this.$store.dispatch("GET_INFO", localStorage.getItem("token"))
		}
		else {
			this.$router.push("/login")
		}
	}
}
</script>
