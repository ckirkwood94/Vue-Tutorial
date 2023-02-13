const app = Vue.createApp({
  data() {
    return {
      headers: [
        { id: 1, title: 'My First Header', fontSize: 1 },
        { id: 2, title: 'My Second Header', fontSize: 1 },
        { id: 3, title: 'My Third Header', fontSize: 1 },
      ],
      // headerFontSize: 1,
    };
  },
});

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
  .component('first-header-component', {
    props: ['title'],
    template: `<h2>{{ title }}</h2>`,
  })
  .component('header-component', {
    props: ['title'],
    template: `
    <div class="header-component">
      <h2>{{ title }}</h2>
      <button @click="$emit('increaseTextSize')">
        Increase Text Size
      </button>
    </div>
    `,
  })
  .component('slot-component', {
    template: `
    <div>
      <p>This is my component.</p>
      <slot></slot>
    </div>
    `,
  })
  .mount('#my-first-div');
