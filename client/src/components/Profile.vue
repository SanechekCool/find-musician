<template>
<div>
    <!-- User information -->
    <div id='user-info' class='d-flex justify-center mt-12'>
        <div class='text-center'>
            <div class='d-inline-flex mt-2'>
                <v-avatar :size="50" :tile='false'  class='mr-4 '><img :src="user.photoUrl"></v-avatar>
                <h1 >{{ user.username }}</h1>
            </div>
            <p>{{ user.email }}</p>
        </div>
    </div>

    <!-- User music -->
    <h1 class='display-3 mt-6' style='text-align: center;'>Uploaded music</h1>
    <div id='music' class='d-flex justify-center mt-4'>
        <v-card  min-width='500' class='text-left elevation-24'>
            <div v-for='i in 9' :key='i' class='flex-column' id='track'>
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <div>
                            <v-item-group  class='d-inline-flex mt-2 ml-3 mb-2'>
                                <v-item>
                                    <v-img
                                        :src='user.photoUrl'
                                        height="50"
                                        width='50'
                                        class="text-right pa-2"
                                    >
                                        
                                        <v-overlay v-if="hover" absolute color="#aaa">
                                            <v-btn icon dark >
                                                <v-icon v-if='!isPlaying' @click='playTrack'>mdi-play</v-icon>
												    <v-icon v-else @click='pauseTrack'>mdi-pause</v-icon>
                                            </v-btn>
                                        </v-overlay>
                                    </v-img>
                                </v-item>
                                <div class='d-flex flex-column ml-2' @click='showTrack(i)'>
                                    <h4>Track {{ i }}</h4>
                                    <small>{{ user.username }}</small>
                                </div>
                            </v-item-group>
                        </div>
                        
                    </template>
                </v-hover>
                <v-divider></v-divider>
            </div>
        </v-card>
    </div>


    <div class="text-center">
    <v-bottom-sheet inset v-model='sheet'>
     
      <v-card tile>
        <v-progress-linear
		  :value='20'
          class="my-0"
          height="3"
        ></v-progress-linear>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Track {{ track.id }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-spacer></v-spacer>

            <v-list-item-icon>
              <v-btn icon>
                <v-icon>mdi-rewind</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            	<v-btn icon>
            		<v-icon v-if='!isPlaying' @click='playTrack'>mdi-play</v-icon>
					<v-icon v-else @click='pauseTrack'>mdi-pause</v-icon>
              	</v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon>
                <v-icon>mdi-fast-forward</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
  </div>
</div>
	
</template>

<script>
import { mapState } from "vuex"
import audioFile from "../assets/Тима Белорусских_-_Незабудка.mp3"

export default {
	name: 'Profile',
	data: () => ({
		sheet: false,
		audio: new Audio(audioFile),
		duration: null,
        bufferValue: 20,
        track: {
			id: '',
		},
		isPlaying: false 
    }),
	computed:{
        ...mapState(["user"]),
        color(){
            return this.$root.color
		},
		
    },
    methods: {
		
        playTrack(){
			this.startBuffer()
			this.isPlaying = true
			this.audio.play()
		},
		
		pauseTrack(){
			this.isPlaying = false
			this.audio.pause()
		},
        showTrack(i){
            this.track.id = i
            this.sheet = true 
        },
        logout(){
            localStorage.removeItem("token")
            this.$router.push("/login")
        }
    },
	mounted(){
		
		let _this = this
		this.audio.addEventListener('loadedmetadata', function() {
			_this.duration = _this.audio.duration
		})
	},
	
}
</script>


<style>
    #header__avatar:hover{
        cursor: pointer;
        opacity: 0.85;
        transition: .4s;
    }
    #track:hover{
        cursor: pointer;
    }
</style>