<template>
  <v-container class="container-map">
    <div class="img-wrapper">
        <img width="200" src="~/assets/TDI.png" class="center-h center-v"/>
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

  <!--

     <v-layout row wrap>
      <v-flex sm12 md4 lg4>
          <img width="200" src="~/assets/Cluster.png" class="center-v center-h "/>
      </v-flex>
      <v-flex sm12 md4 lg4>
          <img width="200" src="~/assets/Guide.png" class="center-v center-h "/>
      </v-flex>
      <v-flex sm12 md4 lg4>
          <img width="200" src="~/assets/TDI.png" class="center-v center-h "/>
      </v-flex>
    </v-layout>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <p class="title-text">WELCOME TO TIJUANA</p>
    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum leo odio, quis egestas velit tempus quis. Quisque scelerisque iaculis eros nec placerat. Mauris eu ex in tellus accumsan tristique et vel urna. Nullam semper justo nibh, ac consequat velit volutpat sit amet. Maecenas laoreet tellus non est malesuada feugiat. Mauris sed varius lacus, quis tempus erat. Cras odio neque, convallis sit amet lectus quis, tincidunt mattis enim. Aenean facilisis lobortis dolor quis molestie. Quisque porta pulvinar pulvinar. Cras vel malesuada felis. Morbi ultrices consectetur ante, vel mattis leo auctor vel. Nam sit amet vestibulum lorem. Sed eleifend maximus urna, sit amet mollis enim tincidunt sed.
    </p>
    <v-layout row wrap class="gallery-row">
      <v-flex sm6 md4 lg4>
          <div class="test-image">
            <div class="black-item">
              <p class="text-image">Bares</p>
            </div>
          </div>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
          <img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
          <img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 class="gallery-col">
          <img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 class="gallery-col">
          <img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 class="gallery-col">
          <img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>
      </v-flex>
    </v-layout>

    -->
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
   data () {
      return {
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
  mounted() {
    console.log('prueba');
  }
}
</script>

<style>

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