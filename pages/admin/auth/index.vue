<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" placeholder="email" />
        <input type="password" v-model="password" placeholder="password" />
        <button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
        <button type="button" style="margin-left: 10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminAuthPage',
    data() {
      return {
        isLogin: true,
        email: '',
        password: ''
      }
      
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/admin');
        });
      }
    }
  }
</script>

<style scoped>
  .admin-auth-page {
    padding: 20px;
  }
  
  .auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

