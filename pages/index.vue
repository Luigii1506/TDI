<template>
  <v-container class="container-map">
    <img src="~assets/plazaSantaCeciloa.jpg" class="img"> 
    <v-layout row wrap class="layout-relative" style="margin-top: 20px;">
      <v-flex xs12>
        <img src="~/assets/TDI-texto.png" class="tdi" >
      </v-flex>
    </v-layout>
    <v-layout row wrap class="layout-relative" style="margin-top: 20px;">
      <v-flex xs12 sm4>
        <img src="~/assets/flag-america.png" @click="americaFlag" nuxt class="flags">
        <p class="welcome-text">Welcome</p>
      </v-flex>
      <v-flex xs12 sm4>
        <img src="~/assets/china.png" @click="chinaFlag" nuxt class="flags"/>
        <p class="welcome-text">欢迎</p>
      </v-flex>
      <v-flex xs12 sm4 style="padding-bottom: 20px;">
        <img src="~/assets/mexico.png" @click="mexicoFlag" nuxt class="flags"/>
        <p class="welcome-text">Bienvenido</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
   layout: 'home',
   data () {
      return {
        dialog: true,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
          markers: [{
            position: { // Mercado de artesanias
              lng: -117.033218,
              lat: 32.536288
            }
          },
          {
            position: { // Santa cecilia
              lng: -117.037617,
              lat: 32.536226
            }
          },
          {
            position: { // Museo de cera
              lng: -117.035595,
              lat: 32.537008
            }
          },
          {
            position: { // Instituto municipal de arte y cultura
              lng: -117.038977,
              lat: 32.534987
            }
          },
          {
            position: { // Mercado el popo
              lng: -117.039575,
              lat: 32.535159
            }
          },
          {
            position: { // Catedral
              lng: -117.040373,
              lat: 32.535369
            }
          },
          {
            position: { // Mercado Municipal
              lng: -117.040412,
              lat: 32.536199
            }
          },
          {
            position: { // Jai-alai 
              lng: -117.035596,
              lat: 32.528720
            }
          },
          {
            position: { // Parque la ocho 
              lng: -117.037465,
              lat: 32.527876
            }
          },
          {
            position: { // Av revolucion
              lng: -117.036563,
              lat: 32.532045
            }
          }
          
          
        ],
        currentLoc: {},
        maplocation:{lng: -117.036756, lat:  32.532991},
        styleMaps: [
            {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ]
      }
    },
  components: {
    AdminPostForm
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    americaFlag() {
      this.dialog = false;
      this.$router.push(this.localePath('home', 'en'));
    },
    mexicoFlag() {
      this.dialog = false;
      this.$router.push(this.localePath('home', 'es'));
    },
    chinaFlag() {
      this.dialog = false;
      this.$router.push(this.localePath('home', 'ch'));
    }
  },
  created() {
    console.log('created');
  },
  updated() {
    this.dialog = true;
  }
}
</script>

<style scoped>

.layout-relative {
  position: relative;
  z-index: 9999;
}

 .img {
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    padding-top: 0px;
    z-index: 1;
    opacity: 0.3;
    top: 0px;
    filter: grayscale(100%);
}

.tdi {
  width: 250px;
  margin: auto;
  display: block;
}

.welcome-text {
  text-align: center;
  color: white;
  font-size: 28pt;
  margin:0;
  font-weight: 600;
}

.flags {
  margin: auto;
  display: block;
  width: 100px;
  cursor: pointer;
}

.img-wrapper {
  height: 35%;
}

.map-wrapper {
  height: 65%;
  position: relative;
}

.container-map {
  height: calc(100vh - 56px);
}

.mapStyle {
  height: 100%;
  position: absolute;
  bottom: 00px;
  width: 100%;
  left: 0px;
  right: 0px;
  margin: auto;
}

.text-image {
  color: white;
  text-align: center;
  font-size: 18pt;
  font-weight: bold;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
}

.black-item:hover > p {
  opacity: 0.8;
}

.test-image {
  width: 250px;
  height: 200px;
  background-image: url('https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg');
  margin: auto;
  display: block;
  background-size: contain;
  z-index: 1;
}

.test-image:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
}

.black-item {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
}


.gallery-col {
  margin-top: 25px;
}

.gallery-row {
  margin-top: 50px;
  margin-bottom: 40px;
}

.body-text {
  font-size: 16pt;
}

.title-text {
  text-align: center;
  margin-top: 30px;
  font-size: 50pt;
}

.center-v {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.center-h {
  margin: auto;
  display: block;
}
</style>