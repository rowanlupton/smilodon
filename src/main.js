// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*'
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://pylodon.rowan.website/rowan")
    .then(response => {this.results = response.data.results})
  }
})
