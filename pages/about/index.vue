<template>

<v-form method="post" action="https://securelogin.arubanetworks.com/cgi-bin/login" id="nativeForm" v-model="valid">

      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
 </v-form>

</template>

 <script>
    export default {
      name: 'contact',

      data () {
         return { 
            valid: false,
            name: '',
            nameRules: [
              (v) => !!v || 'Name is required',
              (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
          }
        },
        methods: {
          submit() {
            nativeForm.submit()
          }
        }
      }
  </script>

<style scoped>



</style>