"use strict";

new Vue({
  el: '#app',
  data: {
    clicked: false,
    showenone: true,
    showentwo: true
  },
  computed: {
    'noslidebar': function noslidebar() {
      return this.clicked ? 'no-sidebar' : '';
    },
    'allcontent': function allcontent() {
      return this.clicked ? 'ally-area' : '';
    },
    'toBeShowenOne': function toBeShowenOne() {
      return this.showenone ? 'beShowen' : '';
    },
    'toBeShowenTwo': function toBeShowenTwo() {
      return this.showentwo ? 'beShowen' : '';
    }
  }
}); // methods:{ 
//     showIt:function(e){
//         e.target.setAttribute('class','beShowen'); 
//     }
// },