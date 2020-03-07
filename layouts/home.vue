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
        background-image: linear-gradient(to bottom, #8d272e, #952c34, #9c3239, #a4373f, #ac3c45);
        padding-bottom: 0px !important;
        overflow: auto;
    }

    .v-content__wrap {
      overflow: auto;
      position: unset;
    }

</style>