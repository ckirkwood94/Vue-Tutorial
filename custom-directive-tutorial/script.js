// const app = Vue.createApp({});

// app.directive('focus', {
//   mounted(el) {
//     el.focus();
//   },
// });

// app.mount('#container');

// const app = Vue.createApp({
//   data() {
//     return {
//       message: 'sample with arguments',
//     };
//   },
// });

// app.directive('arguments', {
//   mounted(el, binding, vnode) {
//     el.innerHTML =
//       'value: ' +
//       JSON.stringify(binding.value) +
//       '<br>' +
//       'argument: ' +
//       JSON.stringify(binding.arg) +
//       '<br>' +
//       'modifiers: ' +
//       JSON.stringify(binding.modifiers);
//   },
// });

// app.mount('#container');

// const app = Vue.createApp({
//   data() {
//     return {
//       location: 'left',
//     };
//   },
// });

// app.directive('stick-element', {
//   mounted(el, binding) {
//     el.style.position = 'fixed';
//     const locationArgument = binding.arg || 'bottom';

//     el.style[locationArgument] = binding.value + 'px';
//   },
// });

// app.mount('#container');

const app = Vue.createApp({
  data() {
    return {
      location: 'left',
      locationPadding: 100,
    };
  },
});

app.directive('stick-element', {
  mounted(el, binding) {
    el.style.position = 'fixed';
    const locationArgument = binding.arg || 'bottom';
    el.style[locationArgument] = binding.value + 'px';
  },
  updated(el, binding) {
    const locationArgument = binding.arg || 'bottom';
    el.style[locationArgument] = binding.value + 'px';
  },
});

app.mount('#container');
