import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import LandingComponent from '@/components/Home/LandingComponent'
import HulpIdeaalComponent from '@/components/Home/HulpIdeaalComponent'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      LandingComponent,
      HulpIdeaalComponent,
    },
  },
})
