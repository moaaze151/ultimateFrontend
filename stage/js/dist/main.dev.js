"use strict";

var sliderbar = document.getElementById('sliderbar-id');
var allcontent = document.getElementById('allcontent-id');
new Vue({
  el: '#app',
  data: {
    showenone: true,
    showentwo: true // sliderbar:sliderbar,

  },
  methods: {
    'showHideSidebar': function showHideSidebar() {
      sliderbar.classList.toggle('no-sidebar');
      sliderbar.classList.toggle('ally-area');
    }
  },
  computed: {
    'toBeShowenOne': function toBeShowenOne() {
      return this.showenone ? 'beShowen' : '';
    },
    'toBeShowenTwo': function toBeShowenTwo() {
      return this.showentwo ? 'beShowen' : '';
    }
  }
});