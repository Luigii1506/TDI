<template>
  <v-app>
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
    <v-content class="v-content">
      <v-container style="padding: 0px; max-width: 100%;">
        <nuxt />
      </v-container>
    </v-content>
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
  
   
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
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
  padding-bottom: 120px !important;
}

.image-padding {
  margin-left: 30px;
  margin-right: 30px;
}
</style>