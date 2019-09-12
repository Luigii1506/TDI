<template>
    <!--
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
      -->
      <v-list three-line style="background: unset; color: white;">
          <template v-for="(item, index) in items">
         
            <v-subheader
              v-if="item.header"
              :key="item.header"
              style="display: none;"
            >
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            
            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click="toDetail(item.id)"
              nuxt
            >
              
              <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]" style="font-size: 40px;">{{item.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" style="font-weight: bold;"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle" style="font-size: 12pt; color: gold"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
               <div :class="[item.numberClas]">
                 <p class="number-text">{{item.number}}</p>
              </div>
            </v-list-tile-action>
              
            </v-list-tile>
          </template>
        </v-list>
</template>





<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  data() {
    return {
       items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'PEDWEST',
            subtitle: "(San Diego)",
            id: 0,
            numberClas: "black white--text number-wrapper",
            number: 1,
            icon: 'palette',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'MERCADO DE ARTESANIAS',
            subtitle: "Artisan's Market",
            id: 1,
            numberClas: "blue white--text number-wrapper",
            number: 2,
            icon: 'palette',
            iconClass: 'white--text'

          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MUSEO DE CERA',
            subtitle: "Wax Museum",
            id: 2,
            numberClas: "red white--text number-wrapper",
            number: 3,
            icon: 'museum',
            iconClass: 'white--text'

          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'MERCADO DE FLORES',
            subtitle: "Flower Market",
            id: 3,
            numberClas: "blue white--text number-wrapper",
            number: 4,
            icon: 'shopping_cart',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
           {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'PLAZA SANTA CECILIA',
            subtitle: "Old Town Tijuana",
            id: 4,
            numberClas: "green white--text number-wrapper",
            number:5,
            icon: 'business',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'INSTITUTO MUNICIPAL DE ARTE Y CULTURA',
            subtitle: "Arts & Culture Institute",
            id: 5,
            numberClas: "red white--text number-wrapper",
            number: 6,
            icon: 'business',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MERCADO TRADICIONES MEXICANAS "EL POP"',
            subtitle: "Crafts & Farmers Market",
            id: 6,
            numberClas: "blue white--text number-wrapper",
            number: 7,
            icon: 'shopping_cart',
            iconClass: 'white--text'

          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'CATEDRAL',
            subtitle: "",
            id: 7,
            numberClas: "red white--text number-wrapper",
            number: 8,
            icon: 'location_city',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MERCADO MUNICIPAL',
            subtitle: "Traditional Mexican Food Market",
            id: 8,
            numberClas: "green white--text number-wrapper",
            number: 9,
            icon: 'shopping_cart',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'JAI-ALAI',
            subtitle: "",
            id: 9,
            numberClas: "red white--text number-wrapper",
            number: 10,
            icon: 'sports_handball',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'PARQUE "LA OCHO',
            subtitle: "Park",
            id: 10,
            numberClas: "red white--text number-wrapper",
            number: 11,
            icon: 'place',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'AVE. REVOLUCION',
            subtitle: "Revolution Ave.",
            id: 11,
            numberClas: "blue darken-4 white--text number-wrapper",
            number: 'A',
            icon: 'place',
            iconClass: 'white--text'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'CALLE 6A',
            subtitle: "6th Street / Nigthlife Corridor",
            id: 12,
            numberClas: "green white--text number-wrapper",
            number: 'B',
            icon: 'local_bar',
            iconClass: 'white--text'
         }
        ]
    }
  },
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: false
    }
  },
  methods: {
    toDetail(url) {
      console.log('prueba', url)
      this.$router.push(this.localePath({ name: "posts-id", params: { id: url } }));
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.number-wrapper {
  text-align: center;
  border-radius: 50%; 
  width: 40px; 
  height: 40px;
}

.number-text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 27px;
}
</style>
