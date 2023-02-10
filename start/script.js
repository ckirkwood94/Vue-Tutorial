// const RootComponent = {};

// const app = Vue.createApp(RootComponent)
//   .component('UserInput', UderInputComponent)
//   .directive('blur', BlurDirective)
//   .use(LocalPlugin);

// const RootComponentInstance = app.mount('#app');

// const app = Vue.createApp({
//   data() {
//     return {
//       valueToReturn: 'Hello',
//     };
//   },
// });

// const appInstance = app.mount('#app');

// console.log(appInstance.valueToReturn);

// const app = Vue.createApp({
//   data() {
//     return {
//       someValue: 'Created',
//     };
//   },
//   created() {
//     console.log(this.someValue);
//   },
// });

const YourFirstVueApp = {
  data() {
    return {
      text: 'This is my first app.',
      timer: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.timer++;
    }, 1000);
  },
};

Vue.createApp(YourFirstVueApp).mount('#app');

// const Timer = {
//   data() {
//     return {
//       timer: 0,
//     };
//   },
//   mounted() {
//     setInterval(() => {
//       this.timer++;
//     }, 1000);
//   },
// };

// Vue.createApp(Timer).mount('#timer');
