<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      style="background-color: rgba(238,232,205,1); color: white;"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        class="hidden-md-and-up"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container style="padding: 0px; max-width: 100%;">
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--
       <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
    -->
   
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Admin',
          to: '/admin'
        },
        {
          icon: 'bubble_chart',
          title: 'Blogs',
          to: '/posts'
        },
        {
          icon: 'local_bar',
          title: 'Bares',
          to: '/bares'
        },
        {
          icon: 'restaurant',
          title: 'Restaurantes',
          to: '/restaurantes'
        },
        {
          icon: 'local_cafe',
          title: 'Cafes',
          to: '/cafes'
        },
        {
          icon: 'event',
          title: 'Eventos',
          to: '/eventos'
        },
        {
          icon: 'healing',
          title: 'Salud',
          to: '/salud'
        },
        {
          icon: 'local_cafe',
          title: 'Belleza',
          to: '/belleza'
        }
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style >
.app {
  background-color: red !important;
  background: red !important;
}

.application.theme .v-list, .application.theme .v-navigation-drawer { 
    background: #570505 !important; 
  }
</style>