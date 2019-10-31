<template>
    <v-toolbar>
        <v-toolbar-title class='ml-3' @click='returnHome' style='cursor:pointer'>Find Musician</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-avatar @click='showProfile' :size="50" :tile='false'  class='mr-3 mt-2'><img  id='header__avatar' :src="user.photoUrl"></v-avatar>
        </v-toolbar-items>
  	</v-toolbar>
</template>

<script>
import { mapState } from "vuex"

export default {
	name: 'Toolbar',
	data: () => ({
		
	}),
	computed:{
        ...mapState(["user"]),
        color(){
            return this.$root.color
        }
    },
    methods: {
        showProfile(){
            if (window.location.href != 'http://localhost:8080/#/profile')
                this.$router.push("/profile")
        },
        returnHome(){
            if (window.location.href != 'http://localhost:8080/#/')
                this.$router.push("/")
        },
        logout(){
            localStorage.removeItem("token")
            this.$router.push("/login")
        }
    },
	created(){
		
	}
}
</script>


<style>
    #header__avatar:hover{
        cursor: pointer;
        opacity: 0.85;
        transition: .4s;
    }
</style>