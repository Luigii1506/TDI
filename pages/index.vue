<template>
  <v-container>
    <v-flex xs12 md8>
    <GmapMap class="map" :center="maplocation" :zoom="7" map-type-id="terrain">
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
    </GmapMap>
    </v-flex>
    <v-layout row wrap class="gallery-row">
      <v-flex sm6 md4 lg4>
          <div class="test-image">
            <div class="black-item">
              <p class="text-image">Bares</p>
            </div>
          </div>
          <!--<img width="250" height="200" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/hoteles-en-tijuana-eventos-culturales-cecut.jpg" class="center-v center-h "/>-->
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
            position: {
              lng: 10.2,
              lat: 10
            }
          },
          {
            position: {
              lng: 40.1,
              lat: 10
            }
          }
        ],
        currentLoc: {},
        maplocation:{lng: 0, lat: 0}
      }
    },
  components: {
    AdminPostForm
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>

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