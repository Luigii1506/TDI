<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
     
     <p>Estas en Home</p>
     <AdminPostForm :posts="loadedPosts"/>
     
    </v-flex>
  </v-layout>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
  components: {
    AdminPostForm
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
