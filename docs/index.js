require('prismjs')

import Vue from 'vue'
import vCubeDoc from './v-cube-doc.vue'
import vImgDoc from './v-img-doc.vue'
import vStickyDoc from './v-sticky-doc.vue'

/* eslint no-new: 0 */
new Vue({
  el: 'body',
  components: {
    vCubeDoc,
    vImgDoc,
    vStickyDoc
  }
})
