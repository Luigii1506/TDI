<template>

<!--
 <v-form method="post" action="https://securelogin.arubanetworks.com/cgi-bin/login" id="nativeForm" v-model="valid">
      <v-text-field v-model="name" label="Nombres"></v-text-field>
      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
 </v-form>
 https://securelogin.hpe.com/cgi-bin/login

-->


<v-form method="post" id="nativeForm" v-model="valid">
      <!--
      <input type="hidden" id="hidden1" value="Guest_Authenticated">  
      <v-text-field v-model="name" label="Nombres"></v-text-field>
      -->
      <input type="hidden" id="hidden1" value="Guest_Authenticated" v-if="awesome"> 
      <v-text-field v-model="name" label="Tu primer nombre"></v-text-field>
      <v-text-field v-model="name2" label="Te segundo nombre"></v-text-field>
      <v-text-field v-model="correo" label="Te correo"></v-text-field>
      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
 </v-form>

</template>

 <script>
    export default {
      data () {
         return { 
            valid: false,
              name: '',
              name2: '',
              correo: '',
              awesome: false
          }
        },
        methods: {
          submit() {
            if(this.name !== '' && this.name2 !== '' && this.correo !== '') {
              this.awesome = true
            }
            console.log('Presionando boton', this.name);
            console.log('Presionando boton', this.name2);
            console.log('Presionando boton', this.correo);
            //nativeForm.submit()
          }
        }
      }
  </script>

<style scoped>



</style>