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
        <img src="~/assets/flag-america.png" @click="americaFlag" nuxt class="flags">
        <img src="~/assets/china.png" @click="chinaFlag" nuxt class="flags"/>
        <img src="~/assets/mexico.png" @click="mexicoFlag" nuxt class="flags"/>
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
       <a :href="postItems[id].phone" style="text-decoration: none;">  
         <v-icon class="iconbottom">phone</v-icon>
        </a>
    </div>
    <hr class="hr-large"/>
    <div class="info-wrapper">
      <p class="info-text">
        {{ $t('lugaresInfo[' + id + ']') }}
      </p>
    </div>
    <hr class="hr-large"/>
  </v-container>
</template>

<script>

export default {
    data () {
      return {
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
            phone: 'tel:664-625-1240',
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
          },
          {
            title: 'INSTITUTO MUNICIPAL DE ARTE Y CULTURA',
            subtitle: "Arts & Culture Institute",
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
            phone: 'tel:664-625-1240'
          },
          {
            title: 'MERCADO TRADICIONES MEXICANAS "EL POP"',
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
            phone: 'tel:664-625-1240'
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
  }
};
</script>


<style scoped>

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
  margin-top: 25px;
}

.phone-wrapper {
  width: max-content;
  margin-left: auto;
  position: relative;
  z-index: 9999;
  margin-bottom: 12px;
  margin-top: 15px;
}

.flags {
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.container-padding-bottom {
  padding-left: 0;
  padding-right: 0;
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