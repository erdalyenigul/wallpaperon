
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Wallpapers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Free Full HD Wallpapers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap&subset=latin-ext' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ranga:400,700&display=swap&subset=latin-ext' }
    ]
  },
  env: {
    baseURL: 'https://api.unsplash.com/',
    clientID: '2167f5134f20935d08854393daff02cb5f161faac45310bf90bf49bd820740c7'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000', height:'60px',  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}