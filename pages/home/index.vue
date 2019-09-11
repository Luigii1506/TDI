<template>
  <v-container class="container-map">
    <!--
    <div class="img-wrapper">
        <img width="200" src="~/assets/TDI.png" class="center-h center-v"/>
    </div>
    -->
    <v-container grid-list-sm fluid class="img-wrapper-carrusel">
      <v-layout row wrap>
        <v-flex
          v-for="n in items"
          :key="n.key"
          xs6
          d-flex
        >
          <v-card flat tile class="d-flex">
            <v-img
              :src="n.src"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-layout
                  fill-height
                  align-center
                  justify-center
                  ma-0
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <img src="~assets/plazaSantaCeciloa.jpg" class="img"> 
    <div class="flags-wrapper">
        <img src="~/assets/flag-america.png" @click="americaFlag" nuxt class="flags">
        <img src="~/assets/china.png" @click="chinaFlag" nuxt class="flags"/>
        <img src="~/assets/mexico.png" @click="mexicoFlag" nuxt class="flags"/>
    </div>
    <div class="map-wrapper">
      <GmapMap 
        class="map mapStyle" 
        :center="maplocation" 
        :zoom="15" 
        :options="{
          fullscreenControl: false,
          draggable: false,
          scaleControl: false,
          streetViewControl: false,
          disableDefaultUi: true,
          zoomControl: false,
          mapTypeControl: false,
          mapTypeId: 'roadmap',
          styles: styleMaps,
          scrollwheel: false
        }"
        map-type-id="terrain">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapMap>
    </div>
  </v-container>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
   data () {
      return {
        dialog: true,
        items: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Avenida_Revoluci%C3%B3n_in_Tijuana_Mexico.JPG',
            key: 0
          },
          {
            src: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/tijuana/atractivos/BC_TIJUANA-BURRO-ZEBRA_MG_7962_FEmd.jpg',
             key: 1
          },
          {
            src: 'https://www.hotelcaesars.com.mx/wp-content/uploads/2016/07/HotelCaesars_revolucion.jpg',
             key: 2
          },
          {
            src: 'https://theguiltycode.com/wp-content/uploads/2018/07/bflesh-plaza-santa-cecilia.jpg',
             key: 3
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
    test() {
      this.dialog = false;
      this.$router.push(this.localePath('posts', 'it'));
    },
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

  .img-wrapper-carrusel {
    position: relative;
    z-index: 999;
    padding: 0px;
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

.flags-wrapper {
  width: max-content;
  margin-left: auto;
  position: relative;
  z-index: 9999;
  margin-top: 25px;
}

.flags {
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.img-wrapper {
  height: 35%;
}

.map-wrapper {
  height: 65%;
  position: relative;
  z-index: 9999;
}

.container-map {
  height: calc(100vh - 98px);
  padding: 0px;
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