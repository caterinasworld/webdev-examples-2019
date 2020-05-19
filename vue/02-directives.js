// All examples are adjusted from the Vue.js Docs: https://vuejs.org/v2/guide/#
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello There?',
  },
  methods: {
    reverse: () => {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
