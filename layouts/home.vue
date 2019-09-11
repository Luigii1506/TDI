<template>
  <v-app>
    <v-content class="v-content">
      <v-container >
        <nuxt />
      </v-container>
    </v-content>   
  </v-app>
</template>

<script>
export default {
}
</script>

<style>
    .v-content {
        background-image: linear-gradient(to bottom, #004d8a, #005a90, #006693, #007193, #007c93);
        padding-bottom: 0px !important;
        overflow: auto;
    }

    .v-content__wrap {
      overflow: auto;
      position: unset;
    }

</style>