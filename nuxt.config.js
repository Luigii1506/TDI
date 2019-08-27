const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,  maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/main.css',
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vue2-google-maps'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      lazy:true,
      locales: [
        {
          name: 'Espanol',
          code: 'es',
          iso: 'es-MX',
          file: 'es-MX.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Chino',
          code: 'ch',
          iso: 'ch-CH',
          file: 'ch-CH.js'
        },
      ],
      loadLanguagesAsync: true,
      langDir: 'lang/',
      defaultLocale: 'en',
    }]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://seed-28af0.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib', /^vue2-google-maps($|\/)/],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
     
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://seed-28af0.firebaseio.com',
    fbAPIKey: 'AIzaSyB7hNE4RYupDyGMLat_-AIHnf3lEFg8pgA'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  vendor:["vue2-google-maps"]
}