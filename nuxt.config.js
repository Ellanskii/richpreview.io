export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content', // FIXME doesn't work with firebase functions
    '@nuxtjs/firebase',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  firebase: {
    config: {
      apiKey: 'AIzaSyCDXOmWb3XMDv9C6bM1-cDo6-g1gqOHDJA',
      authDomain: 'richpreviewio.firebaseapp.com',
      databaseURL: 'https://richpreviewio.firebaseio.com',
      projectId: 'richpreviewio',
      storageBucket: 'richpreviewio.appspot.com',
      messagingSenderId: '1037651875524',
      appId: '1:1037651875524:web:1d858f599d2758f6f49b91',
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      // realtimeDb: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
  },
}
