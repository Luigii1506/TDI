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
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" style="font-weight: bold;"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle" style="font-size: 12pt; color: gold"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
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
            url: '/posts/0'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'MERCADO DE ARTESANIAS',
            subtitle: "Artisan's Market",
            id: 1,
            url: '/posts/1'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MUSEO DE CERA',
            subtitle: "Wax Museum",
            id: 2,
            url: '/posts/2'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'MERCADO DE FLORES',
            subtitle: "Flower Market",
            id: 3,
            url: '/posts/3'
          },
          { divider: true, inset: true },
           {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'PLAZA SANTA CECILIA',
            subtitle: "Old Town Tijuana",
            id: 4,
            url: '/posts/4'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'INSTITUTO MUNICIPAL DE ARTE Y CULTURA',
            subtitle: "Arts & Culture Institute",
            id: 5,
            url: '/posts/5'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MERCADO TRADICIONES MEXICANAS "EL POP"',
            subtitle: "Crafts & Farmers Market",
            id: 6,
            url: '/posts/6'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'CATEDRAL',
            subtitle: "",
            id: 7,
            url: '/posts/7'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'MERCADO MUNICIPAL',
            subtitle: "Traditional Mexican Food Market",
            id: 8,
            url: '/posts/8'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'JAI-ALAI',
            subtitle: "",
            id: 9,
            url: '/posts/9'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'PARQUE "LA OCHO',
            subtitle: "Park",
            id: 10,
            url: '/posts/10'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'AVE. REVOLUCION',
            subtitle: "Revolution Ave.",
            id: 11,
            url: '/posts/11'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'CALLE 6A',
            subtitle: "6th Street / Nigthlife Corridor",
            id: 12,
            url: '/posts/12'
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
</style>
