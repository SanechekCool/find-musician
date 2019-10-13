<template>
  	<v-container>
		<div class='d-flex justify-center align-center' style='margin-top: 350px;'> 
			<v-flex lg8>
				<v-card class="elevation-2 ">
					<v-toolbar  :color="color" class='mb-2'>
						<v-toolbar-title>Register</v-toolbar-title>
					</v-toolbar>
                     <v-row>
                        <v-col cols="12" sm="6">
                           <v-text-field class='px-2' color='rgba(0, 0, 0, .54)' prepend-icon="mdi-account" label="Username" v-model='username' type="text"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class='px-2' color='rgba(0, 0, 0, .54)' prepend-icon="mdi-email" label="E-Mail" v-model='email'  type="text"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                             <v-file-input class='px-2' color='rgba(0, 0, 0, .54)' type="file" accept="image/*"  v-model='file' prepend-icon="mdi-camera" label="Profile picture"></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class='px-2' color='rgba(0, 0, 0, .54)' prepend-icon="mdi-key" label="Password" v-model='password' type="password" @keyup.enter='register'></v-text-field>
                        </v-col>
                    </v-row>
					<v-card-actions>
						<v-spacer></v-spacer>
                        <router-link to='/login' class='mr-4'>Already have an account?</router-link>
						<v-btn :color="color" @click='signUp'>Sign up</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
            <!-- <v-overlay :value="overlay">
				<div id='cont_anim' class='d-flex justify-center '>
					<img id='animation' src="./assets/logo/logo1x.svg" alt="">
				</div>
			</v-overlay> -->
		</div>
	</v-container>
</template>

<script>
import AuthHelper from '../modules/AuthHelper'

export default {
	name: 'RegisterPage',
	data: () => ({
		file: null,
		email: '',
		password: '',
		username: ''
	}),
	computed: {
		color(){
			return this.$root.color
		}
	},
	methods: {
		async signUp(){
			let token = await AuthHelper.register(this.email, this.username, this.password, "https://im0-tub-ru.yandex.net/i?id=ca4fe9687525fb3a2c11f044969b9ff4&n=13")
			
			this.$store.dispatch("GET_INFO", token)
			.then(() => {
				this.$router.push("/")
			})
		}
	}
}
</script>
