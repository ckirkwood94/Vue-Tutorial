const app = Vue.createApp({});

app
  .component('my-first-component', {
    data() {
      return {
        propertyName: 0,
      };
    },
    template: `
  <button v-on:click="propertyName++">
    Clicked {{ propertyName }} times
  </button>
  `,
  })
  .component('header-component', {
    props: ['title'],
    template: `<h2>{{ title }}</h2>`,
  })
  .mount('#my-first-div');
