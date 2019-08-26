<template>
  <v-layout row wrap>
    <!--
    <v-flex xs12 md8>
      <GmapMap class="map" :center="maplocation" :zoom="7" map-type-id="terrain">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapMap>
    </v-flex>
    -->
    <v-flex xs12>
        <PostList :posts="loadedPosts" />
    </v-flex>
  </v-layout>
  
  <!--
        <div class="posts-page">
          <PostList :posts="loadedPosts" />
        </div>
        -->
</template>

<script>
  import PostList from "@/components/Posts/PostList";
  
  export default {
    data() {
      return {
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

      };
    },
    middleware: 'log',
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },
  
  };
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .map {
    width: 100%;
    height: calc(100vh - 64px);
    ;
  }
  
  .places {
    background-color: red;
    width: 100%;
    height: auto;
  }
  
  .list-places {
    max-height: calc(100vh - 64px);
    overflow-y: scroll;
  }
</style>
