<template>
  <v-container class="container-padding-bottom">
    <!--
    <div class="single-post-page">
      <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
        </div>
      </section>
      <v-carousel hide-delimiters class="carrusel"> 
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <p class="p-info">{{ loadedPost.previewText }}</p>
    </div>
    -->
    <div class="title-wrapper"> 
      <p class="title">{{postItems[id].title}}</p>
      <p class="subtitle">{{postItems[id].subtitle}}</p>
    </div>
    <hr class="hr-small"/>
    <div class="flags-wrapper">
        <img src="~/assets/flag-america.png" @click="americaFlag" nuxt v-bind:class="{ 'active': 'US' == bandera ? true : false, 'flags': true }"/>
        <img src="~/assets/china.png" @click="chinaFlag" nuxt v-bind:class="{ 'active': 'CH' == bandera ? true : false, 'flags': true }" />
        <img src="~/assets/mexico.png" @click="mexicoFlag" nuxt v-bind:class="{ 'active': 'MX' == bandera ? true : false, 'flags': true }"/>
    </div>
   <v-carousel hide-delimiters class="carrusel">
      <v-carousel-item
        v-for="(item,i) in postItems[id].items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="phone-wrapper">
      <v-icon class="iconbottom">place</v-icon>
       <a :href="postItems[id].phone" style="text-decoration: none;" v-if="postItems[id].phone !== ''">  
         <v-icon class="iconbottom">phone</v-icon>
        </a>
    </div>
      <p class="d-text">Nosotros</p>
    <hr class="hr-large"/>
    <div class="info-wrapper">
      <p class="info-text">
        {{ $t('lugaresInfo[' + id + ']') }}
      </p>
    </div>
    <div v-if="postItems[id].horarios.length > 0 ? true : false">
      <p class="d-text">Horario</p>
      <hr class="hr-large"/>
      <p class="dia" style="margin-top:15px;"><span>Lunes:</span><span class="hora">{{postItems[id].horarios[0]}}</span></p>
      <p class="dia"><span>Martes:</span><span class="hora">{{postItems[id].horarios[1]}}</span></p>
      <p class="dia"><span>Miercoles:</span><span class="hora">{{postItems[id].horarios[2]}}</span></p>
      <p class="dia"><span>Jueves:</span><span class="hora">{{postItems[id].horarios[3]}}</span></p>
      <p class="dia"><span>Viernes:</span><span class="hora">{{postItems[id].horarios[4]}}</span></p>
      <p class="dia"><span>Sabado:</span><span class="hora">{{postItems[id].horarios[5]}}</span></p>
      <p class="dia"><span>Domingo:</span><span class="hora">{{postItems[id].horarios[6]}}</span></p>
    </div>
  </v-container>
</template>

<script>

export default {
    data () {
      return {
        bandera: '',
        postItems: [
          {
            title: 'PEDWEST',
            subtitle: "(San Diego)",
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
            info: "",
            phone: '',
            horarios: ['24 horas','24 horas','24 horas','24 horas','24 horas','24 horas','24 horas']
          },
          {
            title: 'MERCADO DE ARTESANIAS',
            subtitle: "Artisan's Market",
            items: [
              {
                src: 'https://s3-media4.fl.yelpcdn.com/bphoto/xCrfoRYxba4t2bYj0Yx3tA/o.jpg',
              },
              {
                src: 'https://s3-media2.fl.yelpcdn.com/bphoto/Qu7M8vB3Rw3-lUTT1gj_Kw/o.jpg',
              },
              {
                src: 'https://s3-media1.fl.yelpcdn.com/bphoto/U08angocbH44-OVqAGNUKQ/o.jpg',
              },
              {
                src: 'https://media-cdn.tripadvisor.com/media/photo-s/06/0c/b6/c5/artist-market.jpg',
              },
            ],
            info: "",
            phone: 'tel:664-351-1022',
            horarios: ['9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','Cerrado']
          },
          {
            title: 'MUSEO DE CERA',
            subtitle: "Wax Museum",
            items: [
              {
                src: 'http://2.bp.blogspot.com/_ZB3ch19_aZs/R-AogkutC-I/AAAAAAAAACg/xqtzpV1AIZc/s320/IMG_0758.JPG',
              },
              {
                src: 'https://tijuana.travel/wp-content/uploads/2019/06/Museo-de-Cera-Chavo.jpg',
              },
              {
                src: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s6ed960841df41b83/image/i73630f3e282f021d/version/1533207442/image.jpg',
              },
              {
                src: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/db/a3/af/lugar-iconografico-de.jpg',
              },
            ],
            info: "",
            phone: 'tel:664-688-2478',
            horarios: ['10:00 - 18:00','10:00 - 18:00','10:00 - 18:00','10:00 - 18:00','10:00 - 18:00','10:00 - 18:00','10:00 - 18:00']
          },
          {
            title: 'MERCADO DE FLORES',
            subtitle: "Flower Market",
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
            info: "",
            phone: 'tel:664-625-1240',
            horarios: []
          },
          {
            title: 'PLAZA SANTA CECILIA',
            subtitle: "Old Town Tijuana",
            items: [
              {
                src: 'http://observaturbc.org/sites/default/files/images/atractivos_turisticos_node/2014/418/principal.jpg',
              },
              {
                src: 'https://live.staticflickr.com/5493/31330505722_ef7e4b84c1_b.jpg',
              },
              {
                src: 'https://i.pinimg.com/originals/ae/cd/de/aecdde7eaccb5c459b2c0fc6ba56b181.jpg',
              },
              {
                src: 'https://i.pinimg.com/originals/dc/b5/1f/dcb51f054388a843da5de5a7afc1b981.jpg',
              },
            ],
            info: "",
            phone: 'tel:664-170-1545',
            horarios: ['24 horas','24 horas','24 horas','24 horas','24 horas','24 horas','24 horas']
          },
          {
            title: 'INSTITUTO MUNICIPAL DE ARTE Y CULTURA',
            subtitle: "Arts & Culture Institute",
            items: [
              {
                src: 'http://www.imac.tijuana.gob.mx/muhti/galeria/26.jpg',
              },
              
            ],
            info: "",
            phone: 'tel:664-688-1721',
            horarios: ['9:00 - 19:00','9:00 - 19:00','9:00 - 19:00','9:00 - 19:00','9:00 - 19:00','10:00 - 18:00','10:00 - 18:00']
          },
          {
            title: 'MERCADO TRADICIONES MEXICANAS "EL POPO"',
            subtitle: "Crafts & Farmers Market",
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
            info: "",
            phone: 'tel:664-625-1240',
            horarios: ['8:00 - 20:30','8:00 - 20:30','8:00 - 20:30','8:00 - 20:30','8:00 - 20:30','8:00 - 20:30','8:00 - 20:30']
          },
          {
            title: 'CATEDRAL',
            subtitle: "",
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
            info: "",
            phone: 'tel:664-685-3026',
            horarios: ['7:00 - 21:00', '7:00 - 21:00', '7:00 - 21:00', '7:00 - 21:00', '7:00 - 21:00', '7:00 - 21:00', '7:00 - 21:00']
          },
          {
            title: 'MERCADO MUNICIPAL',
            subtitle: "Traditional Mexican Food Market",
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
            info: "",
            phone: '',
            horarios: ['8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00', '8:00 - 18:00']
          },
          {
            title: 'JAI-ALAI',
            subtitle: "",
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
            info: "",
            phone: 'tel:664-685-7073',
            horarios: ['10:00 - 23:30', '10:00 - 18:00','10:00 - 18:00','10:00 - 18:00','10:00 - 18:00', '10:00 - 23:30', '10:00 - 23:30']
          },
          {
            title: 'PARQUE "LA OCHO"',
            subtitle: "Park",
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
            info: "",
            phone: 'tel:664-307-0706',
            horarios: ['24 horas','24 horas','24 horas','24 horas','24 horas','24 horas','24 horas']
          },
          {
            title: 'AVE. REVOLUCION',
            subtitle: "Revolution Ave.",
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
            info: "",
            phone: 'tel:664-625-1240',
            horarios: ['24 horas','24 horas','24 horas','24 horas','24 horas','24 horas','24 horas']
          },
          {
            title: 'CALLE 6A',
            subtitle: "6th Street / Nigthlife Corridor",
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
            info: "",
            phone: '',
            horarios: ['24 horas','24 horas','24 horas','24 horas','24 horas','24 horas','24 horas']
          }
        ]
      }
    },
  asyncData(context) {
    return {
      id: context.params.id
    }
  },
  methods: {
      americaFlag() {
      this.dialog = false;
      this.$router.push(this.switchLocalePath('en'));
    },
    mexicoFlag() {
      this.dialog = false;
      this.$router.push(this.switchLocalePath('es'));
    },
    chinaFlag() {
      this.dialog = false;
      this.$router.push(this.switchLocalePath('ch'));
    }
  },
  mounted() {
    if(this.$route.path.includes('ch')) {
      this.bandera = 'CH'
    } else if(this.$route.path.includes('es')) {
      this.bandera = 'MX'
    } else {
      this.bandera = 'US'
    }
  }
};
</script>


<style scoped>

.hora {
  font-size: 20px;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 15px;
}

.dia {
  font-size: 25px;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
}

.d-text {
  font-size: 35px;
  color: goldenrod;
  font-weight: 700;
  margin-bottom: 0px;
}

.active {
    color: #ddd;
    font-size: 1.2em;
    box-shadow: 0 0 40px white;
}

.iconbottom {
    color: white;
    background-color: goldenrod;
    font-size: 40px;
    border-radius: 8px;
    padding: 5px;
    margin-left: 10px;
    margin-right: 5px;
}

.carrusel {
  margin-bottom: 10px;
}

.hr-small {
  border:0;
  margin: auto;
  width: 50%;
  height: 4px;
  background:goldenrod;
}

.hr-large {
  border:0;
  margin:0;
  width:100%;
  height: 3px;
  background:goldenrod;
}

.flags-wrapper {
  width: max-content;
  margin-left: auto;
  position: relative;
  z-index: 9999;
  margin-bottom: 8px;
  margin-top: 25px;
}

.phone-wrapper {
  width: max-content;
  margin-left: auto;
  position: relative;
  z-index: 9999;
  margin-top: 15px;
}

.flags {
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.container-padding-bottom {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 60px;
}

.info-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
}

.info-text {
  color: white;
  font-size: 16pt !important;
  text-align: justify;
}

.title-wrapper {
  margin-top: 15px;
  margin-bottom: 5px;
}

.title {
  color: white;
  font-size: 20pt !important;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
}

.subtitle {
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 16pt !important;
}

.mapa {
  background-color: red;
  height: 400px;
  width: 100%;
}

.p-info {
  margin-top: 35px;
  font-size: 18px;
  text-align: left;
}

.single-post-page {
  padding-top: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>