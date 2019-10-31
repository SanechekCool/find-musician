<template>
  	<div id="app">
		<v-app id="inspire">
			<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm10 md8>
						<v-card class="elevation-12">
							<v-toolbar :color="color" flat>
								<v-toolbar-title>Login</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										label="Email"
										color='rgba(0,0,0, .54)'
										name="login"
										v-model='email'
										prepend-icon="mdi-email"
										type="text"
									></v-text-field>

									<v-text-field
										id="password"
										label="Password"
										v-model='password'
										color='rgba(0,0,0, .54)'
										name="password"
										prepend-icon="mdi-lock"
										type="password"
									></v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<router-link to='/register' class='mr-4'>Do not have an account?</router-link>
								<v-btn :color="color" class='font-weight-bold' @click='login'>Sign In</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
			</v-content>
		</v-app>
	</div>
</template>

<script>
import AuthHelper from '../modules/AuthHelper'

export default {
	name: 'LoginPage',
	data: () => ({
		email: '',
		password: ''
	}),
	computed: {
		color(){
			return this.$root.color
		}
	},
	methods: {
		async login(){
			let token = await AuthHelper.login(this.email, this.password)
			
			this.$store.dispatch("GET_INFO", token)
			.then(() => {
				this.$router.push("/")
			})
		}
	},
	created(){
		if (localStorage.getItem("token") != undefined){
			this.$router.push("/")
		}
	}
}
</script>
