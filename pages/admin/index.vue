<template>
    <div>
         
        <button @click="$router.push('/admin/new-post')">Create post</button>
         <PostList
        isAdmin
        :posts="loadedPosts" />
       
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'

export default {
  middleware: 'auth',
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}

</script>