import axios from 'axios';

export default async () => {
  const { data } = await axios.get(process.env.API_URL + 'settings/config');
  return {
    ssr: true,
    head: {
      titleTemplate: data.result.titleTemplate,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ],
      script: [
      ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/assets/css/main.css'
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: '~/plugins/vue2-timeago' },
      { src: '~/plugins/floating-vue' }
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxtjs/google-analytics'
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://github.com/nicolasbeauvais/vue-social-sharing
      'vue-social-sharing/nuxt',
    ],
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: process.env.API_URL || 'http://localhost:5000/',
      credentials: true,
    },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
    
    router: {
      middleware: ['auth']
    },
  
    // https://google-analytics.nuxtjs.org/setup
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    },
    publicRuntimeConfig: {
      SITE_NAME: process.env.SITE_NAME || 'NoName',
      API_URL: process.env.API_URL || 'http://localhost:5000/',
      URL: process.env.URL || 'https://noname.red/',
      googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    },
  }
}