<template>
  <v-app>

    <!--
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
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
    -->

    <!--
    <v-toolbar
      :clipped-left="clipped"
      app
      style="background-color: red; color: white;"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
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
    --> 

    <v-content class="v-content">
      <v-container class="v-cont">
        <nuxt />
      </v-container>
    </v-content>
    
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="white"
      class="nav-bar"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        @click="toHome"
        nuxt
      >
        <span>Mapa</span>
        <v-icon>map</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
        @click="toPosts"
        nuxt
      >
        <span>Lugares</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>

    <!--
     <v-footer
      absolute
      app
      style="height: 120px;"
      >
      <div class="center-h">
        <img width="100" src="~/assets/Cluster.png" />
        <img width="100" src="~/assets/Guide.png" class="center-v image-padding"/>
        <img width="100" src="~/assets/TDI.png" class="center-v"/>
      </div>
    </v-footer>
    -->
   
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      bottomNav: 'recent',
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
      right: true,
      rightDrawer: false,
      title: 'TDI'
    }
  },
  methods: {
    toPosts() {
      this.$router.push(this.localePath({ name: "posts" }));
    },
    toHome() {
      this.$router.push(this.localePath({ name: "home" }));
    }
  }
}
</script>

<style >

.nav-bar {
  z-index: 9999999 !important;
}

.app {
  background-color: red !important;
  background: red !important;
}

.application.theme .v-list, .application.theme .v-navigation-drawer { 
    background: #570505 !important; 
  }


.center-h {
  margin: auto;
  display: block;
}

.center-v {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.v-content {
  padding-bottom: 0px !important;
  background-image: linear-gradient(to bottom, #8d272e, #952c34, #9c3239, #a4373f, #ac3c45);
}

.image-padding {
  margin-left: 30px;
  margin-right: 30px;
}

.gmnoprint {
  display: none;
}

.gm-style-cc {
  display: none
}

 .v-cont {
      padding-left: 0px;
      padding-top: 0px;
      padding-right: 0px;
      max-width: 100%;
      overflow: auto;
      height: calc(100vh - 56px);
  }
</style>