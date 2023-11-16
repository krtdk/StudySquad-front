import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'

import TokenService from "@/service/token.service";
import setInterceptor from "@/service/setInterceptor";
import {QuillEditor} from "@vueup/vue-quill";

library.add(faUserSecret)
loadFonts()

const app = createApp(App);

app.mixin({
    created() {
        const token = localStorage.getItem('Authorization');
        if (token) {
            TokenService.setAccessToken(token);
        }
    },
})

setInterceptor(store)

app.use(router)
    .use(store)
    .use(vuetify, {
        defaultAssets: {
            font: true,
            icons: 'fa',
        },
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('QuillEditor', QuillEditor)
    .mount('#app')