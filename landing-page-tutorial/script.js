const app = Vue.createApp({
  data() {
    return {
      cards: [
        {
          title: 'Vue',
          link: {
            url: 'https://vuejs.org',
            src: 'https://vuejs.org/images/logo.png',
          },
          text: 'Complete component-based User Interface framework. Includes most core features. More common at startups than big companies.',
        },
        {
          title: 'React',
          link: {
            url: 'https://reactjs.org',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
          },
          text: 'Lean,component-based User Interface library. Developed by Facebook Must add some features via packages.',
        },
        {
          title: 'Angular',
          link: {
            url: 'https://angular.io',
            src: 'https://angular.io/assets/images/logos/angular/angular.png',
          },
          text: 'Complete component-based User Interface framework. Includes many features for large projects. Code with TypeScript.',
        },
      ],
    };
  },
});

app.component('cards-component', {
  props: ['title', 'link', 'text'],
  template: `
  <div class="card">
    <h2>{{ title }}</h2>

    <img v-bind:src="link.src" />
    <p>{{ text }}</p>

    <a :href="link.url">
      <button>{{ title }} Website</button>
    </a>
  </div>
  `,
});

app.mount('#container');
