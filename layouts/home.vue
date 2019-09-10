<template>
  <v-app>
    <p>Test</p>
    <v-content class="v-content">
      <v-container style="padding: 0px; max-width: 100%;">
        <nuxt />
      </v-container>
    </v-content>   
  </v-app>
</template>

<script>
export default {
}
</script>

<style >
    .v-content {
        background-image: linear-gradient(to bottom, #004d8a, #005a90, #006693, #007193, #007c93);
    }
</style>