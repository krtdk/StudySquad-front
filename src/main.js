import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//import axios from 'axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify, {
    defaultAssets: {
      font: true,
      icons: 'fa',
    },
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
//app.config.globalProperties.$serverUrl = '//localhost:8081' // api server
//app.config.globalProperties.$axios = axios // axios instance