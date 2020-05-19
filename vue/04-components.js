// All examples are adjusted from the Vue.js Docs: https://vuejs.org/v2/guide/#

Vue.component('Book', {
  props: ['book'],
  template: '<li>{{ book.title }}</li>',
});

let app = new Vue({
  el: '#app',
  data: {
    books: [
      { id: 0, title: 'A Game of Thrones' },
      { id: 1, title: 'A Clash of Kings' },
      { id: 2, title: 'A Storm of Swords' },
      { id: 3, title: 'A Feast for Crows' },
      { id: 4, title: 'A Dance with Dragons' },
    ],
  },
});
