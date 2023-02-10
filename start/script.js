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
      onHoverText: 'Reactive message',
      isPalindrome: 'racecars',
      inputText: 'Type Here',
      visible: true,
      visibleButton: 'Hide Content',
      listItems: [
        { item: 'Study Vue course' },
        { item: 'Learn React Native' },
        { item: 'Study Angular' },
      ],
      inputTextList: '',
      html: '<span style="color: blue">Text in blue</span>',
    };
  },
  mounted() {
    setInterval(() => {
      this.timer++;
    }, 1000);
  },
  methods: {
    checkPalindrome() {
      this.isPalindrome = this.isPalindrome.split('').reverse().join('');
    },
    showOrHideContent() {
      this.visible = !this.visible;
      if (this.visible) {
        this.visibleButton = 'Hide Content';
      } else {
        this.visibleButton = 'Show Content';
      }
    },
    addItemToList() {
      this.listItems.push({ item: this.inputTextList });
      this.inputTextList = '';
    },
  },
};

Vue.createApp(YourFirstVueApp).mount('#app');

const InterpolateApp = {
  data() {
    return {
      html: '<span style="color: blue"> Text in blue</span>',
    };
  },
};

// Vue.createApp(List).mount('#list');
