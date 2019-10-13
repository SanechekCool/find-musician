import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const  domain = "http://localhost:5000"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {}
	},
	mutations: {
		createUser(state, data){
			state.user = data.data
		}
	},
	actions: {
		async GET_INFO(context, token) {
			localStorage.setItem("token", token)
			let info = await axios({
				method: 'get',
				url: domain + '/api/userinfo',
				headers: {
					"Authorization": token
				}
			})
			context.commit("createUser", info)
		}
	}
})
