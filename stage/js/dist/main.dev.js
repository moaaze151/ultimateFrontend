"use strict";

new Vue({
  el: '#app',
  data: {
    clicked: false
  },
  methods: {},
  computed: {
    'noslidebar': function noslidebar() {
      return this.clicked ? 'no-sidebar' : '';
    },
    'allcontent': function allcontent() {
      return this.clicked ? 'ally-area' : '';
    }
  }
});