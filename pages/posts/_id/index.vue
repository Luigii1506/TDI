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
      <p class="d-text">{{ $t('informacion') }}</p>
    <hr class="hr-large"/>
    <div class="info-wrapper">
      <p class="info-text">
        {{ $t('lugaresInfo[' + id + ']') }}
      </p>
    </div>
    <div v-if="postItems[id].horarios.length > 0 ? true : false">
      <p class="d-text">{{ $t('horario') }}</p>
      <hr class="hr-large"/>
      <p class="dia" style="margin-top:15px;"><span>{{ $t('lunes') }}:</span><span class="hora">{{postItems[id].horarios[0]}}</span></p>
      <p class="dia"><span>{{ $t('martes') }}:</span><span class="hora">{{postItems[id].horarios[1]}}</span></p>
      <p class="dia"><span>{{ $t('miercoles') }}:</span><span class="hora">{{postItems[id].horarios[2]}}</span></p>
      <p class="dia"><span>{{ $t('jueves') }}:</span><span class="hora">{{postItems[id].horarios[3]}}</span></p>
      <p class="dia"><span>{{ $t('viernes') }}:</span><span class="hora">{{postItems[id].horarios[4]}}</span></p>
      <p class="dia"><span>{{ $t('sabado') }}:</span><span class="hora">{{postItems[id].horarios[5]}}</span></p>
      <p class="dia"><span>{{ $t('domingo') }}:</span><span class="hora">{{postItems[id].horarios[6]}}</span></p>
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
                src: 'http://sintesistv.com.mx/wp-content/uploads/2017/12/garita-el-chaparral-tijuana-1-850x491.jpeg',
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
                src: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/buapfbdpgahgspdo5gve/MallickGhatFlowerMarketMorningWalkTour.jpg',
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
                src: 'https://s3-media1.fl.yelpcdn.com/bphoto/-ihkxyubYGZca3MD3LAFMg/o.jpg',
              },
              {
                src: 'https://live.staticflickr.com/3258/2389537710_2f63bf5b64_b.jpg',
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
                src: 'https://ntcd.mx/uploads/2017/07/25/nota-nacional-catedral-de-tijuana-es-monumento-historico201725718.jpg',
              },
              {
                src: 'https://paseopormexico.com/app/img/lugares/bajacalifornia/paseopormexico_tijuana3.jpg',
              },
              {
                src: 'https://www.uniradioserver.com/media/news_thumbs/201904/20190402124743_17.jpg',
              }
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
                src: 'https://s3-media4.fl.yelpcdn.com/bphoto/7Ho0Qnnk8g8mFQmp-MQ-NA/348s.jpg',
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
                src: 'http://www.laprensa-sandiego.org/archieve/2007/august03-07/jaialai3.jpg',
              },
              {
                src: 'https://tijuanaesmas.files.wordpress.com/2013/02/jai-alai.jpg',
              },
              {
                src: 'https://live.staticflickr.com/2482/3683249121_f3262ed81c_z.jpg',
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
                src: 'http://lh3.googleusercontent.com/-KWB68Vh9SCM/VxvGtycFvHI/AAAAAAAAP-w/dAb8jaTsHQALDrAagr4Ap-d3CQLL0huHgCJkC/photo.jpg',
              },
              {
                src: 'data:image/jpeg;base64,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',
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
                src: 'https://verazinforma.com/wp-content/uploads/2018/09/presentan-programas-financiamiento-negocios-avenida-revolucion-tijuana-veraz-informa.jpg',
              },
              {
                src: 'https://uberblogapi.10upcdn.com/wp-content/uploads/2017/05/Avenida-Revolucion-EscapadasMexicoDesconocido-1.jpg',
              },
              {
                src: 'data:image/jpeg;base64,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',
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
                src: 'http://sintesistv.com.mx/wp-content/uploads/2017/08/la-sexta-tijuana-zona-centro.jpg',
              },
              {
                src: 'http://sintesistv.com.mx/wp-content/uploads/2018/02/calle-sexta-remodelacion-bares-3-850x491.jpeg',
              }
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
  padding-bottom: 0px;
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