<template>
  <div class="admin-auth-page">
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-form @submit.prevent="onSubmit" class="pa-4 pt-6" id="v-form">
        <v-text-field type="email" v-model="email" label="Email address" ></v-text-field>
        <v-text-field type="password" v-model="password" label="Password"></v-text-field>
      
      </v-form>
   
   <v-divider></v-divider>
    <v-card-actions>
      <v-btn type="submit" form="v-form" color="green" class="white--text">{{ isLogin ? 'Login' : 'Sign Up' }}</v-btn>
        <v-btn type="button" color="indigo" class="white--text" style="margin-left: 10px" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</v-btn>
       </v-card-actions>
    </v-card>
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

