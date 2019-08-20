<template>
  <v-container>
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
     <v-btn>CHINGA TU MADRE</v-btn>
    </div>
  </v-container>
</template>

<script>

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
      }
    },
  asyncData(context) {
    return context.app.$axios.$get('/posts/' + context.params.id + '.json')
      .then(data => {
        console.log(data)
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>


<style scoped>

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

.carrusel {
  margin-top: 30px;
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
