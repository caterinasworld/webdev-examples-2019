// All examples are adjusted from the Vue.js Docs: https://vuejs.org/v2/guide/#
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World, Vue!',
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
