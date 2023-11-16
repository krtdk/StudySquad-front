// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import {aliases, fa} from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import 'vuetify/lib/framework';

// Vuetify
import { createVuetify } from 'vuetify'
import {mdi} from "vuetify/iconsets/mdi";

export default createVuetify(
 {
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
},
 }
)